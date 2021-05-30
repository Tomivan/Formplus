import React from 'react';
import './form.css';

const FormTemplate = () => {
    return(
        <div>
            <div className="top-layer">
                <div className="top-left">
                    <input type="text" />
                </div>
                <div className="top-right">
                    <label>Sort By:</label>
                    <fieldset>
                        <legend>Category</legend>
                        <select>
                            <option></option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>Order</legend>
                        <select>
                            <option></option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend>Date</legend>
                        <select>
                            <option></option>
                        </select>
                    </fieldset>
                </div>
            </div>
            <div className="warning">
                <p>Tada! Get started with a free template. Can't find what you are looking for?
                    Search from the 1000+ available templates.
                </p>
            </div>
            <section>
                <div className="section-top">
                    <p>All Templates</p>
                    <p>2000 templates</p>
                </div>
                <div className="card">
                    <h6>Alumni Membership Form Template</h6>
                    <p>Engage your alumni network better with this alumni registration form template.
                        Embed this in your website.
                    </p>
                    <p>Use Template</p>
                </div>
            </section>
        </div>
    )   
}

export default FormTemplate;