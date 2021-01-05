import { useForm } from "react-hook-form";
import './reporting.css'

function Reporting() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <section className='dashboard_wrapper'>
            <span>
                Merchant Partner
            </span>
            {/*<div className='merchant_partner_content'>*/}
                {/*<span>*/}
                    {/*There are no merchant partner yet. <a>Create One</a>*/}
                {/*</span>*/}
            {/*</div>*/}
            <div className='merchant_partner_content'>
                <div>
                    <label for="name" />
                    <input />
                </div>

                <div>
                    <label for="name" />
                    <input />
                </div>

                <div>
                    <label for="name" />
                    <input />
                </div>

                <div>
                    <label for="name" />
                    <input />
                </div>

                <div>
                    <label for="name" />
                    <input />
                </div>

                <div>
                    <label for="name" />
                    <input />
                </div>

                <div>
                    <label for="name" />
                    <input />
                </div>

                <div>
                    <label for="name" />
                    <input />
                </div>
            </div>
        </section>

    );
}

export default Reporting;
