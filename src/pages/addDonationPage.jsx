import DonationForm from "../components/formDonation";

const AddDonationPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full container md:w-1/2 mx-auto bg-gray-100">
        <DonationForm />
      </div>
    </>
  );
};

export default AddDonationPage;
