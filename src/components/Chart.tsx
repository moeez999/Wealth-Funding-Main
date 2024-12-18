import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ChartProps {
  // Define the chart options
  options: {
    dataLabels: {
      enabled: boolean;
    };
    chart: {
      type: string;
      height?: number; // Make height optional
      stacked?: boolean;
      toolbar?: {
        show?: boolean;
      };
      zoom?: {
        enabled?: boolean;
      };
    };
    xaxis: {
      type: string;
      categories: string[];
    };
    responsive?: Array<{
      breakpoint: number;
      options: {
        legend?: {
          show: boolean;
          position?: string;
          offsetX?: number;
          offsetY?: number;
        };
      };
    }>;
    plotOptions?: {
      bar?: {
        columnWidth: string;
        horizontal?: boolean;
        borderRadius?: number;
        dataLabels?: {
          total?: {
            enabled?: boolean;
            style?: {
              fontSize?: string;
              fontWeight?: number;
            };
          };
        };
      };
    };
    legend?: {
      position?: string;
      offsetY?: number;
    };
    fill?: {
      opacity?: number;
    };
  };

  // Define the series data
  series: {
    name: string;
    data: number[];
    color?: string;
  }[];
}

const Chart: React.FC = () => {
  const optionsData: { label: string; value: string }[] = [
    { label: "Select a date", value: "" },
    { label: "22", value: "english" },
    { label: "23", value: "spanish" },
    { label: "25", value: "french" },
  ];
  const options: ChartProps["options"] = {
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        columnWidth: "60%",
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: false,
          },
        },
      },
    },
    xaxis: {
      type: "category", // Set x-axis type to category
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    legend: {
      position: "top",
      offsetY: 5,
    },
    fill: {
      opacity: 1,
    },
  };

  const series: ChartProps["series"] = [
    {
      name: "Phase 1",
      data: [12, 3, 41, 21, 10, 12, 32, 22, 31, 20, 5, 30],
      color: "#00BE64",
    },
    {
      name: "Phase 2",
      data: [13, 23, 20, 8, 13, 23, 20, 8, 13, 23, 20, 8],
      color: "#00BE64",
    },
    {
      name: "Funded",
      data: [11, 17, 5, 15, 11, 17, 15, 15, 11, 17, 15, 15],
      color: "#00BE64",
    },
  ];

  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col md:flex-row justify-between md:items-center pt-4 px-8">
          <div className="font-[Montserrat] font-semibold text-2xl text-[#00BE64] ">
            Customer Statistics
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <FormControl>
              <Select
                IconComponent={() => (
                  <ExpandMoreIcon fontSize="small" sx={{ color: "#00BE64" }} />
                )}
                // name={name}
                // value={value}
                // onChange={onChange}
                displayEmpty
                sx={{
                  backgroundColor: "#00BE64",
                  width: 180,
                  height: 40,
                  borderRadius: "8px",

                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "& .MuiSelect-icon": {
                    fontSize: 32,
                  },
                }}
              >
                <InputLabel htmlFor="select-placeholder">
                  Select Dates
                </InputLabel>
                {optionsData?.map((option) => (
                  <MenuItem
                    sx={{
                      fontFamily: "Montserrat",
                      fontWeight: 400,
                      fontSize: 16,

                      border: "1px solid #00BE64",

                      "&:hover": {
                        backgroundColor: "#00BE64",
                        color: "#FFFFFF",
                      },

                      "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "#061D39",
                        color: "#FFFFFF",
                      },
                    }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <button className="flex items-center bg-[#F6F6F6] text-white cursor-pointer  p-[0.90rem] rounded-lg h-[40px]">
              <div className="flex items-center gap-x-3">
                <img src="../Icons/filterIconBlack.svg" />
                <div className="font-normal text-sm font-[Montserrat] text-[#646464]">
                  Filters
                </div>
              </div>
            </button>
          </div>
        </div>
        <ReactApexChart
          //@ts-ignore
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
    </>
  );
};

export default Chart;
