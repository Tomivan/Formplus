import React, { useState, useEffect} from 'react';
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Search from '../../assets/images/search.svg';
import Info from '../../assets/images/info.svg';
import './form.css';

const FormTemplate = () => {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(100);
    const [pageCount, setPageCount] = useState(0)
  
    const getData = async() => {
        const res = await axios.get(`https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`)
        const data = res.data;
                  const slice = data.slice(offset, offset + perPage)
                  const postData = slice.map(pd => <div key={pd.id} className="card">
                      <h6>{pd.name}</h6>
                       <p>{pd.description}</p>
                       <p className="template">Use Template</p>
                  </div>)
                  setData(postData)
                  setPageCount(Math.ceil(data.length / perPage))
    }
    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
  };
  
   useEffect(() => {
     getData()
   }, [offset])
    return(
        <div>
            <div className="top-layer">
                <div className="top-left">
                    <input type="text" placeholder="Search Templates"/>
                    <img src={Search} alt="search icon" className="search"/>
                </div>
                <div className="top-right">
                    <label>Sort By:</label>
                    <fieldset>
                        <legend>Category</legend>
                        <select>
                            <option>All</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>Order</legend>
                        <select>
                            <option>Default</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>Date</legend>
                        <select>
                            <option>Default</option>
                        </select>
                    </fieldset>
                </div>
            </div>
            <div className="info">
                <img src={Info} alt="info-icon" className="info-icon"/>
                <p>Tada! Get started with a free template. Can't find what you are looking for?
                    Search from the 1000+ available templates.
                </p>
            </div>
            <section>
                <div className="section-top">
                    <p>All Templates</p>
                    <p className="grey">2000 templates</p>
                </div>
               <div className="cards">
                   {data}
               </div>
            </section>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
        </div>
    )   
}

export default FormTemplate;