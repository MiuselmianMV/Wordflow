// components/SectionBlock.jsx
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};


export default function SectionBlock( {background, textColor = 'text-black', children, title, description, image} ) 
{
    const isBgImage = background?.includes('url');

    const bgClass = isBgImage ? 'bg-fixed bg-cover bg-center' : '';
    const style = isBgImage ? { backgroundImage: background } : { backgroundColor: background };

    return (
        <section
        className={`min-h-screen flex items-center justify-center ${bgClass} ${textColor}`}
        style={style}
        >
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            className="max-w-4xl text-center px-6 w-full"
        >
            {image != null && <img src={image} alt="background" className="w-full h-auto object-cover" />}
            {title && (
            <h2 className="text-4xl font-bold mb-4 leading-tight tracking-wide">
                {title}
            </h2>
            )}

            {description && (
            <p className="text-lg mb-6 opacity-80 max-w-2xl mx-auto">
                {description}
            </p>
            )}

            {children}
        </motion.div>
        </section>
    );
}
