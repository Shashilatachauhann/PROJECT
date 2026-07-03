import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";

const AppliedJobs = () => {
//   const { allAppliedJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Table>
        <TableCaption>Recent Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
           [1,2,3,4,5].map((item, index) => (
              <TableRow key={index}>
                <TableCell>23-01-2023</TableCell>
                <TableCell>Softeware Eng</TableCell>
                <TableCell>Google</TableCell>
                <TableCell className="text-right">
                  <Badge className="bg-blue-200 rounded-md"> Selected</Badge>
                </TableCell>
              </TableRow>
            ))
        }
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobs;