# Write your MySQL query statement below
select s.student_id, s.student_name, sub.subject_name, count(e.subject_name) AS attended_exams from students s
cross join subjects sub
left join examinations e on s.student_id = e.student_id AND sub.subject_name = e.subject_name
group by student_id, student_name, subject_name
order by student_id, subject_name