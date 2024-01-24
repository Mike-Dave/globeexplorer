const getPlaceName = async (lat, lng) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.display_name) {
      return data.display_name;
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    throw new Error("Error fetching place name");
  }
};

export default getPlaceName;
