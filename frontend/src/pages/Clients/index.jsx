import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import { getClients } from "../../utils/api";
import { getCountryFlagEmoji } from "../../utils/utils";
import styles from "./styles.module.css";

const Clients = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients().then((res) => {
      setClients(res);
    });
  }, []);
  return (
    <PageWrapper title="Clients">
      <table className={styles.clientsTable}>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((c) => {
            return (
              <tr key={c.id}>
                <td>
                  <span
                    className={styles.countryIcon}
                    role="img"
                    title={c.country}
                  >
                    {getCountryFlagEmoji(c.country)}
                  </span>
                </td>
                <td>{c.name}</td>
                <td>{c.revenue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </PageWrapper>
  );
};

export default Clients;
