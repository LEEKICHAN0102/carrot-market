import { useRouter } from "next/router";
import { useState,useEffect } from "react";

export default function useUser(){
  const [user,setUser]=useState();
  const router=useRouter();
  useEffect(()=>{
    fetch(`/api/users/me`).then(response=>response.json()
    .then((data)=>{
      if(!data.ok){
        return router.push("/enter");
      }
      setUser(data.profile);
    }))
  },[router]);
  return user;
}