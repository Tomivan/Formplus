import React, { useState, useEffect} from 'react';
import Search from '../../assets/images/search.svg';
import Info from '../../assets/images/info.svg';
import './form.css';

const FormTemplate = () => {
    const [state, setState] = useState(null);
    useEffect(() => {
        fetch('https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates', {
            method: 'GET'
        })  
        .then(resp => resp.json())
        .then(
            response => {
                console.log(response)
                setState(response)
            }
        )   
    }, [])
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
                <div className="card">
                    <h6>Alumni Membership Form Template</h6>
                    <p>Engage your alumni network better with this alumni registration form template.
                        Embed this in your website.
                    </p>
                    <p className="template">Use Template</p>
                </div>
            </section>
        </div>
    )   
}

export default FormTemplate;