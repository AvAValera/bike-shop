export default function ProductDescription() {
  
  const tableData = [
    { name: "Frame", value: "Hydroformed Aluminum" },
    { name: "Fork", value: "Carbon Fork" },
    { name: "Headset", value: "Acros Alloy 1-1/2\" Internal Cable Routing" },
    { name: "Shifters", value: "Shimano Tiagra ST-4700" },
    { name: "Front Derailleur", value: "Shimano Tiagra 4700" },
    { name: "Rear Derailleur", value: "Shimano Tiagra 4700 GS" },
    { name: "Crankset", value: "FSA Omega MegaEXO 34x50T" },
    { name: "Bottom Bracket", value: "-" },
    { name: "Chain", value: "KMC X10" },
    { name: "Cassette", value: "SunRace CSMS1 11-34T, 10-Speed" },
    { name: "Brakes", value: "Jagwire RideRever Mechanical Disc" },
    { name: "Wheelset", value: "Alloy, Tubeless 28H 700c Wheels, Orbea Thru-Axle 12x100/12x142 Hubs" },
    { name: "Tires", value: "Vittoria Zaffiro V Rigid Bead, 700x28c" },
    { name: "Handlebar", value: "OC Road Performance RP31-5, 15mm Rise, 70mm Reach, 125mm Drop" },
    { name: "Stem", value: "OC RP21 Road Performance, -6°" },
    { name: "Grips/Bar Tape", value: "Orbea EVA" },
    { name: "Seatpost", value: "Alloy 27.2mm Offset 20mm" },
    { name: "Seatclamp", value: "Single-Bolt" },
    { name: "Saddle", value: "Fizik Aliante R5" },
    { name: "Intended Use", value: "Endurance Road" }
];

  
  return (
    <div className="bg-white@ rounded-md border border-gray-200@ mt-4 lg:mt-0 p-4 sm:p-10">
      <div>
        <h4 className="text-black text-xl font-bold mb-2">Ready to ride</h4>
        <p className="mb-4">
          If you're the type of rider who wants to ride long distances while in
          a comfortable position, then you might want to consider an endurance
          road bike. Endurance road bikes are a better option than race road
          bikes for those who love long adventures on the pavement. With a
          softer ride and more relaxed frame geometry, these bikes are better
          equipped for comfortable all-day adventures. The Orbea Avant H40 Bike
          is a machine that can better help you enjoy the exhilaration of road
          cycling. It has a hydroformed aluminum frame and a carbon fork. The
          frame features a threaded bottom bracket, thru-axles, and internal
          cable routing. The H40 version of the Orbea Avant comes with a Shimano
          Tiagra 4700 2x10-speed drivetrain. The gearing is perfect for all-day
          Gran Fondos and steep hill climbing so you can conquer any ride out
          there. Jagwire RideRever mechanical disc brakes provide reliable
          stopping power so you can descend with confidence. Alloy tubeless
          wheels are paired with Vittoria Zaffiro V Rigid bead tires that
          provide a little extra comfort over rough patches of pavement. With a
          tubeless-compatible set of tires on these wheels, you can ditch the
          tubes and drop the tire pressure for a smoother ride and fewer flats
          when using a tubeless sealant.
        </p>
      </div>
      <div>
        <h4 className="text-black text-xl font-bold mb-2">Features</h4>
        <ul className="mb-4 list-disc pl-4">
          <li>
            Hydroformed aluminum frame with thru-axles and internal cable
            routing
          </li>
          <li>
            Shimano Tiagra drivetrain provides reliable shifting performance
          </li>
          <li>
            Jagwire RideRever mechanical disc brakes offer reliable stopping
            power
          </li>
          <li>
            Alloy tubeless wheels paired with Vittoria Zaffiro V Rigid Bead
            Tires
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-black text-xl font-bold mb-2">Specification</h4>
        <div className="relative overflow-x-auto  sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <tbody>
              {
                tableData.map(el => <tr key={el.name} className="odd:bg-white  even:bg-gray-50  border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {el.name}
                  </th>
                  <td className="px-6 py-4">{el.value}</td>
                </tr>)
              }
             
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
}
