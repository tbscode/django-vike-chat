export default ListViewProfile;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducer";
import { logOutUser } from "../../store/user/api";
import { useApi } from "../../pages/api/client";
import ThemeSelector from "../atoms/ThemeSelector";
import { maybeFetchProfile } from "../../store/profile/api";
import { StatusTypes } from "../../store/types";
import DynamicTextFieldInput from "../atoms/DynamicTextFieldInput";
import { createRef } from "react";

function FirstNameEditInput() {
  const profileStatus = useSelector((state: RootState) => state.profile.status);
  const firstName = useSelector((state: RootState) => state.profile.first_name);

  return (
    <DynamicTextFieldInput
      status={profileStatus}
      fieldValue={firstName}
      placeholder="John"
      onSubmit={(value) => {}}
    />
  );
}

function SecondNameEditInput() {
  const profileStatus = useSelector((state: RootState) => state.profile.status);
  const secondName = useSelector(
    (state: RootState) => state.profile.second_name
  );

  return (
    <DynamicTextFieldInput
      status={profileStatus}
      fieldValue={secondName}
      placeholder="Doe"
      onSubmit={(value) => {}}
    />
  );
}

function ProfileDataLoader() {
  const dispatch = useDispatch();
  const api = useApi();
  const profile = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    if (profile.status === StatusTypes.EMPTY)
      maybeFetchProfile(dispatch, api, profile);
  }, []);
  return <></>;
}

function ProfileIndictors() {
  const lastUpdated = useSelector(
    (state: RootState) => state.profile.last_updated
  );
  return (
    <div className="w-full flex flex-row justify-end content-center items-center gap-2 px-2">
      updated:
      <div className="badge badge-lg">
        {new Date(lastUpdated).toISOString().slice(0, 19).replace("T", " ")}
      </div>
    </div>
  );
}

function ListViewProfile() {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const api = useApi();

  const onLogOut = () => {
    logOutUser(api, dispatch);
  };

  return (
    <>
      <ProfileDataLoader />
      <div
        id="listViewProfile"
        className="flex bg-base-300 flex-col w-full gap-2 p-2 mt-4 shadow rounded-xl"
      >
        <div className="flex flex-row w-full">
          <h1 className="text-2xl">Profile</h1>
          <ProfileIndictors />
        </div>
        <div className="w-full bg-error">error display placeholder</div>
        <span>First name</span>
        <FirstNameEditInput />
        <span>Second Name</span>
        <SecondNameEditInput />
        <span>Email</span>
        <input
          type="text"
          placeholder="example@gmail.com"
          className="input input-bordered w-full"
        />
        <span>Theme</span>
        <ThemeSelector />
        <span>Actions</span>
        <button className="btn btn-xs btn-outline btn-error" onClick={onLogOut}>
          Logout
        </button>
        <a className="btn btn-xs btn-outline" href="/">
          back to home
        </a>
      </div>
    </>
  );
}