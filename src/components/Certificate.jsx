import { CERTIFICATE } from "../constants"
import { motion } from "framer-motion"

const Certificate = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl">Certificates</motion.h2>
            <div>
                {CERTIFICATE.map((certificate, index) => (
                    <div key={index} className="mb-8 flex flex-wrap
                lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <img src={certificate.image}
                                width={250}
                                height={250}
                                alt={certificate.name}
                                className="mb-6 rounded" />
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certificate