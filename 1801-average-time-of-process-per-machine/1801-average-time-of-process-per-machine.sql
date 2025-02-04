# Write your MySQL query statement below
select a1.machine_id, round(AVG(a1.timestamp - a2.timestamp), 3) AS processing_time from Activity a1
join Activity a2 on a1.process_id = a2.process_id AND a1.machine_id = a2.machine_id AND a1.timestamp > a2.timestamp
group by a1.machine_id