// import {
//   Box,
//   Typography,
//   FormControl,
//   FormHelperText,
//   TextField,
//   TextareaAutosize,
//   Stack,
//   Select,
//   MenuItem,
//   Button,
// } from "@pankod/refine-mui";

// import { FormProps } from "interfaces/common";
// import CustomButton from "./CustomButton";
// const Form = ({
//   type,
//   register,
//   handleSubmit,
//   handleImageChange,
//   formLoading,
//   onFinishHandler,
//   propertyImage,
// }: FormProps) => {
//   return (
//     <Box>
//       <Typography fontSize={25} fontWeight={700} color="#11142d">
//         {type} Property
//       </Typography>

//       <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#fcfcfc">
//         <form
//           style={{
//             marginTop: "20px",
//             width: "100%",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//           }}
//           onSubmit={handleSubmit(onFinishHandler)}
//         >
//           <FormControl>
//             <FormHelperText
//               sx={{
//                 fontWeight: 500,
//                 margin: "10px 0",
//                 fontSize: 16,
//                 color: "#11142d",
//               }}
//             >
//               Enter Location
//             </FormHelperText>
//             <TextField
//               fullWidth
//               required
//               id="outlined-basic"
//               color="info"
//               variant="outlined"
//               sx={{
//                 input: { color: "#757575" },
//                 border: "0.1px solid #c2c2c2",
//                 borderRadius: "10px",
//               }}
//               {...register("location", { required: true })}
//             />
//           </FormControl>
//           <FormControl>
//             <FormHelperText
//               sx={{
//                 fontWeight: 500,
//                 margin: "10px 0",
//                 fontSize: 16,
//                 color: "#11142d",
//               }}
//             >
//               Enter Description
//             </FormHelperText>
//             <TextareaAutosize
//               minRows={5}
//               required
//               placeholder="Write Description"
//               color="info"
//               style={{
//                 width: "100%",
//                 background: "transparent",
//                 fontSize: "16px",
//                 borderColor: "rgba(0,0,0,0.23)",
//                 borderRadius: 6,
//                 padding: 10,
//                 color: "#919191",
//               }}
//               {...register("description", { required: true })}
//             />
//           </FormControl>

//           <Stack direction="row" gap={4}>
//             <FormControl sx={{ flex: 1 }}>
//               <FormHelperText
//                 sx={{
//                   fontWeight: 500,
//                   margin: "10px 0",
//                   fontSize: 16,
//                   color: "#11142d",
//                 }}
//               >
//                 Select Property Type
//               </FormHelperText>
//               <Select
//                 sx={{
//                   border: "0.1px solid #c2c2c2",
//                   color: "#757575",
//                 }}
//                 variant="outlined"
//                 color="info"
//                 displayEmpty
//                 required
//                 inputProps={{ "aria-label": "Without label" }}
//                 defaultValue="apartment"
//                 {...register("propertyType", { required: true })}
//               >
//                 <MenuItem value="apartment">Apartment</MenuItem>
//                 <MenuItem value="villa">Villa</MenuItem>
//                 <MenuItem value="farmhouse">farmhouse</MenuItem>
//                 <MenuItem value="condos">Condos</MenuItem>
//                 <MenuItem value="townhouse">Townhouse</MenuItem>
//                 <MenuItem value="duplex">Duplex</MenuItem>
//                 <MenuItem value="studio">Studio</MenuItem>
//                 <MenuItem value="chalet">Chalet</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl>
//               <FormHelperText
//                 sx={{
//                   fontWeight: 500,
//                   margin: "10px 0",
//                   fontSize: 16,
//                   color: "#11142d",
//                 }}
//               >
//                 Enter property price
//               </FormHelperText>
//               <TextField
//                 fullWidth
//                 required
//                 id="outlined-basic"
//                 color="info"
//                 type="number"
//                 variant="outlined"
//                 sx={{
//                   input: { color: "#757575" },
//                   border: "0.1px solid #c2c2c2",
//                   borderRadius: "10px",
//                 }}
//                 {...register("location", { required: true })}
//               />
//             </FormControl>
//           </Stack>

//           <FormControl>
//             <FormHelperText
//               sx={{
//                 fontWeight: 500,
//                 margin: "10px 0",
//                 fontSize: 16,
//                 color: "#11142d",
//               }}
//             >
//               Enter Location
//             </FormHelperText>
//             <TextField
//               fullWidth
//               required
//               id="outlined-basic"
//               color="info"
//               variant="outlined"
//               sx={{
//                 input: { color: "#757575" },
//                 border: "0.1px solid #c2c2c2",
//                 borderRadius: "10px",
//               }}
//               {...register("location", { required: true })}
//             />
//           </FormControl>

//           <Stack direction="column" gap={1} justifyContent="center" mb={2}>
//             <Stack direction="row" gap={2}>
//               <Typography color="#11142d" fontSize={16} fontWeight={500}>
//                 Property Photos
//               </Typography>
//               <Button
//                 component="label"
//                 sx={{
//                   width: "fit-content",
//                   color: "#2ed480",
//                   textTransform: "capitalize",
//                   fontSize: 16,
//                 }}
//               >
//                 Upload *
//                 <input
//                   hidden
//                   accept="image/*"
//                   type="file"
//                   onChange={(e) => {
//                     //@ts-ignore
//                     handleImageChange(e.target.files[0]);
//                   }}
//                 />
//               </Button>
//             </Stack>
//             <Typography
//               fontSize={14}
//               color="#808191"
//               sx={{
//                 wordBreak: "break-all",
//               }}
//             >
//               {propertyImage?.name}
//             </Typography>
//           </Stack>

//           <CustomButton
//             type="submit"
//             title={formLoading ? "Submitting..." : "Submit"}
//             backgroundColor="#475be8"
//             color="#fcfcfc"
//           />
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Form;

/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
} from "@pankod/refine-mui";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
}: FormProps) => (
  <Box>
    <Typography fontSize={25} fontWeight={700} color="#ffffff">
      {type} a Property
    </Typography>

    <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#292929">
      <form
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSubmit(onFinishHandler)}
      >
        <FormControl>
          <FormHelperText
            sx={{
              margin: "10px 0",
              fontSize: 16,
              fontWeight: 700,
              color: "#70a6ff",
            }}
          >
            Enter property name
          </FormHelperText>
          <TextField
            sx={{
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "gray" },
              },
            }}
            inputProps={{ style: { color: "grey" } }}
            fullWidth
            required
            id="outlined-basic"
            color="info"
            variant="outlined"
            {...register("title", { required: true })}
          />
        </FormControl>

        <FormControl>
          <FormHelperText
            sx={{
              margin: "10px 0",
              fontSize: 16,
              fontWeight: 700,
              color: "#70a6ff",
            }}
          >
            Property Description
          </FormHelperText>
          <TextareaAutosize
            minRows={5}
            required
            placeholder="Write description of property"
            id="outlined-basic"
            color="info"
            variant="outlined"
            style={{
              width: "100%",
              background: "transparent",
              fontSize: "16px",
              borderColor: "#808080",
              borderRadius: 6,
              padding: 10,
              color: "#919191",
            }}
            {...register("description", { required: true })}
          />
        </FormControl>

        <Stack direction="row" gap={4}>
          <FormControl sx={{ flex: 1 }}>
            <FormHelperText
              sx={{
                margin: "10px 0",
                fontSize: 16,
                fontWeight: 700,
                color: "#70a6ff",
              }}
            >
              Enter property type
            </FormHelperText>
            <Select
              sx={{
                border: "0.1px solid #c2c2c2",
                color: "#757575",
              }}
              variant="outlined"
              color="info"
              displayEmpty
              required
              inputProps={{ "aria-label": "Without label" }}
              defaultValue="apartment"
              {...register("propertyType", { required: true })}
            >
              <MenuItem value="apartment">Apartment</MenuItem>
              <MenuItem value="villa">Villa</MenuItem>
              <MenuItem value="farmhouse">Farmhouse</MenuItem>
              <MenuItem value="condos">Condos</MenuItem>
              <MenuItem value="townhouse">Townhouse</MenuItem>
              <MenuItem value="duplex">Duplex</MenuItem>
              <MenuItem value="studio">Studio</MenuItem>
              <MenuItem value="chalet">Chalet</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ flex: 1 }}>
            <FormHelperText
              sx={{
                margin: "10px 0",
                fontSize: 16,
                fontWeight: 700,
                color: "#70a6ff",
              }}
            >
              Enter property price
            </FormHelperText>
            <TextField
              inputProps={{ style: { color: "grey", border: "grey" } }}
              sx={{
                "& .MuiInputLabel-root": { color: "green" }, //styles the label
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": { borderColor: "gray" },
                },
              }}
              fullWidth
              required
              id="outlined-basic"
              variant="outlined"
              color="info"
              type="number"
              {...register("price", { required: true })}
            />
          </FormControl>
        </Stack>

        <FormControl>
          <FormHelperText
            sx={{
              margin: "10px 0",
              fontSize: 16,
              fontWeight: 700,
              color: "#70a6ff",
            }}
          >
            Enter location
          </FormHelperText>
          <TextField
            sx={{
              "& .MuiInputLabel-root": { color: "green" }, //styles the label
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "gray" },
              },
            }}
            inputProps={{ style: { color: "grey" } }}
            fullWidth
            required
            id="outlined-basic"
            variant="outlined"
            color="info"
            {...register("location", { required: true })}
          />
        </FormControl>

        <Stack direction="column" gap={1} justifyContent="center" mb={2}>
          <Stack direction="row" gap={2}>
            <Typography
              color="#70a6ff"
              fontSize={16}
              fontWeight={700}
              my="10px"
            >
              Property Photo
            </Typography>

            <Button
              component="label"
              sx={{
                width: "fit-content",
                color: "#2ED480",
                textTransform: "capitalize",
                fontSize: 16,
              }}
            >
              Upload *
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={(e) => {
                  // @ts-ignore
                  handleImageChange(e.target.files[0]);
                }}
              />
            </Button>
          </Stack>
          <Typography
            fontSize={14}
            color="#808191"
            sx={{ wordBreak: "break-all" }}
          >
            {propertyImage?.name}
          </Typography>
        </Stack>

        <CustomButton
          type="submit"
          title={formLoading ? "Submitting..." : "Submit"}
          backgroundColor="#475BE8"
          color="#FCFCFC"
        />
      </form>
    </Box>
  </Box>
);

export default Form;
