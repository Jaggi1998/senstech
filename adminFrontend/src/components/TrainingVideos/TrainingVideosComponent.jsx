import React, { useEffect, useState } from "react";
import Card from "./Card";

const TrainingVideosComponent = ({ videoList }) => {
  console.log(videoList);
  return (
    <>
      <div class="card">
            <div class="card-body">
                <h5 class="card-title text-uppercase mb-0">Manage Videos</h5>
            </div>
            <div class="table-responsive">
                <table class="table no-wrap user-table mb-0 text-left">
                  <thead>
                    <tr>
                      <th scope="col" class="border-0 text-uppercase font-medium pl-4">S.No</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Video</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Category</th>
                      <th scope="col" class="border-0 text-uppercase font-medium">Action</th>
                    
                    </tr>
                  </thead>
                  <tbody>
        {videoList.map((val, ind) => {
          return (
            <Card
              idx={ind+1}
              key={ind}
              imgSrc={val.thumbnail}
              vdId={val._id}
              text={val.title}
              category={val.category.category}
            />
          );
        })}
         </tbody>
                  </table>
              </div>
            </div>
     
    </>
  );
};

export default TrainingVideosComponent;
