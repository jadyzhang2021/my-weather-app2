const CurrentDetail = ({ icon, weathrDetail, unit }) => {
  return (
    <div>
      <div>{icon} </div>
      <div>
        {weathrDetail}
        <span>{unit}</span>
      </div>
    </div>
  );
};

export default CurrentDetail;
