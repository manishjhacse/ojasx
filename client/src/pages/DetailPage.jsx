import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

function DetailPage() {
  return (
    <div className=" flex flex-col items-center  justify-center   ">
    <div className="w-screen flex  justify-center ">
      {/* card */}
      <div className="card lg:card-side w-[1300px]  bg-neutral-900 shadow-xl md:mx-36 mt-1">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      </div>

      {/* details */}
      <div className="flex sm:w-[750px] lg:w-[1660px] md:px-52 mt-3 flex-col">
        <Tabs aria-label="Options">
          <Tab key="photos" title="Photos">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eveniet aliquam ut ratione earum impedit asperiores cum debitis vitae. Optio, magni beatae odit ut aliquam et voluptatibus minus voluptatum, facere voluptas reiciendis debitis, iure doloremque eaque numquam sequi sed a? Omnis id autem sequi repellendus, nihil earum sed placeat veritatis veniam cumque quia provident debitis rem eligendi nesciunt unde cupiditate? Repellat ut omnis inventore adipisci laboriosam debitis delectus molestias nam commodi unde ullam repellendus laborum aliquam non labore assumenda, optio veritatis! Iure consequatur atque maiores doloremque temporibus nobis est, eum a veritatis placeat id impedit exercitationem explicabo saepe laudantium quisquam.
              </CardBody>
            </Card>
          </Tab>
          <Tab key="music" title="Music">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus necessitatibus animi non quaerat possimus! Amet, deleniti quisquam possimus blanditiis dolor, exercitationem necessitatibus consequatur error officia cum sapiente esse voluptate minima ipsum quasi voluptates quod doloremque non dolores ipsam soluta veniam vel praesentium? Qui, nam est debitis, quasi dolores enim voluptatum nesciunt reprehenderit natus maiores deleniti nisi dicta culpa beatae modi? Earum iste dolores excepturi amet iusto, ad voluptates magni dolore eaque praesentium deserunt veniam molestias doloremque ratione autem mollitia, necessitatibus enim? Molestias, ut quibusdam similique sequi illo labore accusantium aut distinctio magnam voluptate, consequatur est inventore esse cupiditate, possimus earum?
              </CardBody>
            </Card>
          </Tab>
          <Tab key="videos" title="Videos">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolorem excepturi, eligendi quos doloribus officia minus vero, odit quis expedita consequuntur aspernatur animi quisquam iure maiores nemo explicabo tenetur facere. Quis aliquam architecto maiores non aut iure voluptatibus sapiente sint cumque dolor, quia sit eius porro vel enim adipisci quidem velit fugit laudantium. Optio porro quibusdam officia minus atque fugiat. Fugiat in accusantium, facilis magnam minima eum ipsum et eligendi similique repudiandae alias omnis dolore esse distinctio! Nostrum, ratione. Adipisci consequatur voluptatem quae sint, magni dolore fugit deserunt aperiam numquam laboriosam obcaecati dolorem et distinctio labore ducimus harum voluptate rem!
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default DetailPage;
