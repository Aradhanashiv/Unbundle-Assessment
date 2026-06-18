import React, { useEffect , useState} from 'react'
import results from '../data/results.json'

const Results = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);
      setError("");

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setProducts(results);
    } catch (err) {
      setError("Failed to load results");
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);

  if (loading) {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#F58420] rounded-full animate-spin"></div>
        <p>Loading results...</p>
      </div>
    </div>
  );
}

if (error) {
  return (
    <div className="flex justify-center items-center py-20">
      <p className="text-red-500 font-medium">
        {error}
      </p>
    </div>
  );
}

  return (
    <section className=" py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="text-center text-[40px] font-bold text-[#181C1C] mb-12">
          Results You'll Love
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0F9FF] p-[8px] rounded-[8px] overflow-hidden"
            >
              < div className="grid grid-cols-2 gap-[4px]">
                <div>
                  <img
                    src={item.before}
                    alt="Before"
                    className="w-full h-[150px] rounded-[2.29px] object-cover"
                  />
                  <p className="text-center text-[14px] font-medium py-2">Before</p>
                </div>

                <div>
                  <img
                    src={item.after}
                    alt="After"
                    className="w-full h-[150px] object-cover"
                  />
                  <p className="text-center text-[14px] font-medium py-2">After</p>
                </div>
              </div>

             <div className="border-t border-[#C8D0D0]">
                <div className="flex justify-between px-4 py-3 text-sm">
                  <span className=" text-[14px] font-medium">Concern</span>
                  <span className='text-[14px] font-medium'>{item.concern}</span>
                </div>

                <div className="border-t border-[#C8D0D0] flex justify-between px-4 py-3 text-sm">
                  <span className="text-[14px] font-medium">
                    Treatment Duration
                  </span>
                  <span className='text-[14px] font-medium'>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Results