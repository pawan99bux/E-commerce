import React from "react";

const Contact = () => {
  return (
    <>
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container">
          <h1>Contact</h1>
          <div className="row justify-content-center align-center py-3">
            <div className="col-md-4 pt-4">
              <img
                src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.6435-9/82804069_2565986103622333_6599097519500689408_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3VRqTu_BwtYAX92U6uD&_nc_ht=scontent.fpat3-1.fna&oh=3c99e5923364dcd9164aa18871064346&oe=61BA47D0"
                alt="Pawan Singh"
                height="200px"
                width="200px"
              />
            </div>
            <div className="col-md-8">
                <h3>Meet The Developer</h3>
                <p><i class="fa fa-user-o me-2" aria-hidden="true"></i>Pawan Singh</p>
                <p><i class="fa fa-laptop me-2" aria-hidden="true"></i>
                Software Engineer</p>
                <p><i class="fa fa-envelope-o me-2" aria-hidden="true"></i>Pawan99bux@gmail.com</p>
                <p><i class="fa fa-phone me-2" aria-hidden="true"></i>+91-7870742876, 7303502922</p>
                <p><i class="fa fa-linkedin me-2" aria-hidden="true"></i><a href="https://www.linkedin.com/in/pawan-singh99/" target="_blank"></a>pawan-singh99</p>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
