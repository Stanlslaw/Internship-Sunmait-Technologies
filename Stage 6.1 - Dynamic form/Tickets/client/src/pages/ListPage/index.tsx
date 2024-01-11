import { FC } from "react";
import Table, { ColumnsType } from "antd/es/table";

import { Genders } from "../../enums";
import { Ticket } from "../../interfaces";

const ListPage: FC = () => {
  const data: Ticket[] = [
    {
      key: "1",
      userFirstName: "Stanislaw",
      userLastName: "Skalkovich",
      userGender: Genders.Male,
      userEmail: "stas.skalkovich@gmail.com",
      userPhone: "+375293332211",
      wayFrom: "Kobrin",
      wayTo: "Minsk",
      luggages: null,
    },
  ];
  const columns: ColumnsType<Ticket> = [
    { title: "First Name", dataIndex: "userFirstName", key: "firstName" },
    { title: "Last Name", dataIndex: "userLastName", key: "lastName" },
    { title: "Gender", dataIndex: "userGender", key: "gender" },
    { title: "Email", dataIndex: "userEmail", key: "email" },
    { title: "Phone", dataIndex: "userPhone", key: "phone" },
    { title: "From", dataIndex: "wayFrom", key: "from" },
    { title: "To", dataIndex: "wayTo", key: "to" },
    { title: "Luggages", dataIndex: "laggages", key: "luggages" },
  ];
  return (
    <div>
      <Table
        size="middle"
        tableLayout="auto"
        scroll={{ x: 640 }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};

export default ListPage;
