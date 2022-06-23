import React from 'react';

const SendReview = () => {

   
    return (
        <div class="mockup-phone mt-5">
            <div class="camera"></div>
            <div class="display">
                <div class="artboard artboard-demo phone-1">

                    {/* review section */}
                    <div class="hero min-h-screen bg-base-200">
                        <div class="hero-content flex-col lg:flex-row-reverse">

                            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form class="card-body">
                                    <div class="form-control">
                                        <input type="text" placeholder="password" class="input input-bordered" />
                                    </div>
                                    <div class="form-control mt-6">
                                        <button type='submit' class="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SendReview;