// import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Accounts from "./Accounts";
import Positions from "./Positions";
import Chart from "./Chart";
import LineChart from "./LineChart";
import LineChartSales from "./LineChartSales";
import TradeHistory from "./TradeHistory";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };
  return (
    <div className="my-16 sm:my-[0px] sm:m-8 p-4 md:p-0">
      <div className="mt-4 md:mt-11 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between">
        <div className="font-semibold text-[#00BE64] font-[Montserrat] text-[24px] lg:text-[38px]">
          Welcome Back, Anddy
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="font-[Montserrat] font-normal text-base text-[#00BE64]">
            Need Help
          </div>
          <img
            src="../Icons/needHelpIcon.png"
            alt="need help icon"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="font-normal text-[#00BE64] font-[Montserrat] text-[14px] lg:text-[18px]">
        Here's what's new
      </div>

      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{
          mt: "2.75rem",
          fontFamily: "Montserrat",
          "& button:focus": {
            color: "#00BE64",
          },

          "& .MuiTab-root.Mui-selected": {
            color: "#00BE64",
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            fontFamily: "Montserrat",
          },
        }}
        TabIndicatorProps={{
          sx: { bgcolor: "#00BE64" },
        }}
      >
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: "#00BE64",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Overview"
        />
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: "#00BE64",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Accounts"
        />
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: "#00BE64",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Positions"
        />
        <Tab
          sx={{
            fontWeight: 500,
            fontSize: { xs: 14, sm: 16 },
            color: "#00BE64",
            fontFamily: "Montserrat",
            textTransform: "capitalize",
          }}
          label="Trade History"
        />
      </Tabs>
      {value === 0 && (
        <>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-[34px] gap-y-3">
            <div
              className="max-w-sm h-[148px] shadow-lg rounded-[10px] overflow-hidden  mt-6 p-6 w-[339px]"
              style={{
                background: "linear-gradient(135deg, #00BE64 0%, #212330 100%)",
              }}
            >
              <div className="flex justify-between">
                <div className="text-lg font-medium font-[Montserrat] text-white ">
                  Total Sales Box
                </div>
                <div className="flex flex-row bg-[white] opacity-5 rounded-full p-[6px]">
                  <img src="../../Icons/upperSite.svg" />
                  <div className="ml-1 text-sm font-normal font-[Montserrat] text-white">
                    10.0%
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-y-1">
                  <div className="text-[30px] font-medium font-[Montserrat] text-white ">
                    $1,280
                  </div>
                  <div className="flex flex-row gap-x-1">
                    <div className="text-[10px] font-normal font-[Montserrat] text-white ">
                      Daily
                    </div>
                    <div className="text-[10px] font-normal font-[Montserrat] text-white ">
                      |
                    </div>
                    <div className="text-[10px] font-normal font-[Montserrat] text-white ">
                      Weekly
                    </div>
                    <div className="text-[10px] font-normal font-[Montserrat] text-white ">
                      |
                    </div>
                    <div className="text-[10px] font-normal font-[Montserrat] text-white ">
                      Monthly
                    </div>
                  </div>
                </div>
                <div className="absolute">
                  <div className="w-2/3 relative left-32 bottom-2">
                    <LineChartSales />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm h-[148px] shadow-lg rounded-[10px] overflow-hidden  mt-6 p-6 w-[339px]">
              <div className="flex justify-between">
                <div className="text-lg font-medium font-[Montserrat] text-[#221835]">
                  Accounts
                </div>
                <div className="w-16 flex flex-row bg-[#ebe9e9] rounded-full p-[6px]">
                  <img src="../../Icons/lowerSite.svg" />
                  <div className="ml-1 text-sm font-normal font-[Montserrat] text-[#221835]">
                    10.0%
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-start">
                <div className="w-1/3 flex flex-col gap-y-1">
                  <div className="text-[30px] font-medium font-[Montserrat] text-[#221835]">
                    150
                  </div>

                  <div className="text-[12px] font-medium font-[Montserrat] text-[#221835]">
                    Most Recent
                  </div>
                </div>
                <div className="absolute">
                  <div className="w-2/3 relative left-28 bottom-8">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm h-[148px] shadow-lg rounded-[10px] overflow-hidden  mt-6 p-6 w-[339px]">
              <div className="flex justify-between">
                <div className="text-lg font-medium font-[Montserrat] text-[#00BE64]">
                  Challenges
                </div>
                <div className="w-16 flex flex-row bg-[#ebe9e9] rounded-full p-[6px]">
                  <img src="../../Icons/lowerSite.svg" />
                  <div className="ml-1 text-sm font-normal font-[Montserrat] text-[#00BE64]">
                    10.0%
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-start">
                <div className="w-1/3 flex flex-col gap-y-1">
                  <div className="text-[30px] font-medium font-[Montserrat] text-[#00BE64]">
                    150
                  </div>

                  <div className="text-[12px] font-medium font-[Montserrat] text-[#00BE64]">
                    Most Recent
                  </div>
                </div>
                <div className="absolute">
                  <div className="w-2/3 relative left-28 bottom-8">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm h-[148px] shadow-lg rounded-[10px] overflow-hidden  mt-6 p-6 w-[339px]">
              <div className="flex justify-between">
                <div className="text-lg font-medium font-[Montserrat] text-[#00BE64]">
                  New Users
                </div>
                <div className="w-16 flex flex-row bg-[#ebe9e9] rounded-full p-[6px]">
                  <img src="../../Icons/lowerSite.svg" />
                  <div className="ml-1 text-sm font-normal font-[Montserrat] text-[#00BE64]">
                    10.0%
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-start">
                <div className="w-1/3 flex flex-col gap-y-1">
                  <div className="text-[30px] font-medium font-[Montserrat] text-[#00BE64]">
                    150
                  </div>

                  <div className="text-[12px] font-medium font-[Montserrat] text-[#00BE64]">
                    Most Recent
                  </div>
                </div>

                <div className="absolute">
                  <div className="w-2/3 relative left-28 bottom-8">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm h-[148px] shadow-lg rounded-[10px] overflow-hidden  mt-6 p-6 w-[339px]">
              <div className="flex justify-between">
                <div className="text-lg font-medium font-[Montserrat] text-[#00BE64]">
                  Sales Objective
                </div>
                <div className="w-16 flex flex-row bg-[#ebe9e9] rounded-full p-[6px]">
                  <img src="../../Icons/lowerSite.svg" />
                  <div className="ml-1 text-sm font-normal font-[Montserrat] text-[#00BE64]">
                    10.0%
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-start">
                <div className="w-1/3 flex flex-col gap-y-1">
                  <div className="text-[30px] font-medium font-[Montserrat] text-[#00BE64]">
                    150
                  </div>

                  <div className="text-[12px] font-medium font-[Montserrat] text-[#00BE64]">
                    Most Recent
                  </div>
                </div>
                <div className="absolute">
                  <div className="w-2/3 relative left-28 bottom-8">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-sm h-[148px] shadow-lg rounded-[10px] overflow-hidden  mt-6 p-6 w-[339px]">
              <div className="flex justify-between">
                <div className="text-lg font-medium font-[Montserrat] text-[#00BE64]">
                  Payments
                </div>
                <div className="w-16 flex flex-row bg-[#ebe9e9] rounded-full p-[6px]">
                  <img src="../../Icons/lowerSite.svg" />
                  <div className="ml-1 text-sm font-normal font-[Montserrat] text-[#00BE64]">
                    10.0%
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-start">
                <div className="w-1/3 flex flex-col gap-y-1">
                  <div className="text-[30px] font-medium font-[Montserrat] text-[#00BE64]">
                    150
                  </div>
                  <div className="text-[12px] font-medium font-[Montserrat] text-[#00BE64]">
                    Most Recent
                  </div>
                </div>
                <div className="absolute">
                  <div className="w-2/3 relative left-28 bottom-8">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white h-[362px] mt-6">
            <Chart />
          </div>
        </>
      )}
      {value === 1 && (
        <div className="mt-6">
          <Accounts />
        </div>
      )}
      {value === 2 && (
        <div className="mt-6">
          <Positions />
        </div>
      )}
      {value === 3 && (
        <div className="mt-6">
          <TradeHistory />
        </div>
      )}
    </div>
  );
};

export default Home;
