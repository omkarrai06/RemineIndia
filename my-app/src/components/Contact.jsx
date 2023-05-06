import React from 'react'
import Header from './Header'

const Contact = () => {
    return (

        <>

        <Header />
        <div>
            <section class="my-5">
        <div class="py-5">
            <h2 class="text-center">Contact Us</h2>
        </div>

        <div class="w-50 m-auto">
            <form action="userinfo.php" method="post">
                <div class="form-group">
                    <label for="">Username</label>
                    <input type="text" name="user" autocomplete="off" class="form-control"/>
                </div>

                <div class="form-group">
                    <label for="">Email</label>
                    <input type="text" name="email" autocomplete="off" class="form-control"/>
                </div>

                <div class="form-group">
                    <label for="">Phone</label>
                    <input type="text" name="mobile" autocomplete="off" class="form-control"/>
                </div>

                <div class="form-group">
                    <label for="">Comment</label>
                    <textarea class="form-control" name="comment" autocomplete="off"> </textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>

    </section>

           
        </div>
        </>
    )
}

export default Contact