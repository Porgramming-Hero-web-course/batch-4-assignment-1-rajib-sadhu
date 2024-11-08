{
  // Problem 6

  // create Profile interface
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  //   set Profile partial type
  type PartialType = Partial<Profile>;

  const updateProfile = (profile: Profile, update: PartialType): Profile => {
    // use spread operator to create new object and then update any properties will overwrite
    return { ...profile, ...update };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const result: Profile = updateProfile(myProfile, { age: 26 });

//   console.log(result);

  //
}
