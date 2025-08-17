"use client";
import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="w-full bg-black text-white py-24 px-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
        Achievements & Profiles
      </h2>

      <div className="max-w-5xl mx-auto space-y-6 text-gray-300">
        <ul className="list-disc list-inside space-y-3">
          <li>
            Completed one-month <b>Web Development Internship</b> at{" "}
            <b>VaultofCodes.in</b>, recognized for sincerity and technical skill.
          </li>
          <li>
            Completed two virtual internships by <b>Deloitte</b> in{" "}
            <b>Data Analytics</b> and <b>Cybersecurity</b>.
          </li>
          <li>
            <b>Oracle Certified Foundations Associate</b> – AI Foundations
            (Oracle University) –{" "}
            <a
              href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=2946E93C2BB944635E8DF0B38FE750F2A34565135F7D24F53A0D0447736B6EBF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              View Credential
            </a>{" "}
            (Aug 2025)
          </li>
          <li>
            <b>Core Coordinator</b> – SCOIT Technical Club, BIET Jhansi.
          </li>
          <li>
            Regular participant in DSA contests and coding challenges.
          </li>
        </ul>

        {/* Coding Profiles */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-green-400 mb-4">
            Coding Profiles
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://leetcode.com/u/abhay_kk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                LeetCode (Username: abhay_kk) – Highest Rating:{" "}
                <span className="text-blue-300 font-bold">1600+</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.codechef.com/users/crash_joy_72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                CodeChef (Username: crash_joy_72) –{" "}
                <span className="text-blue-300 font-bold">2★ (Max Rating: 1400+)</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.geeksforgeeks.org/user/abhaykdw3e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GeeksforGeeks (Username: abhaykdw3e) –{" "}
                <span className="text-blue-300 font-bold">150+ Problems Solved</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
