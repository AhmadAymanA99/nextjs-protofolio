import Link from "next/link";
import Date from "./date";
import utilStyles from "../styles/utils.module.css";

const Section = ({ title, data, url }) => (
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>{title}</h2>
        {data.length > 0 ? (
            <ul className={utilStyles.list}>
                {data.map(({ id, date, till, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/${url}/${id}`} passHref>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                            {till && (
                                <>
                                    {" to "}
                                    <Date dateString={till} />
                                </>
                            )}
                        </small>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No {title.toLowerCase()} to display.</p>
        )}
    </section>
);

export default Section;
