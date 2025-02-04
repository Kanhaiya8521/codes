# Write your MySQL query statement below
select e.name, b.bonus from employee e
left join Bonus b on e.empId = b.empId
where b.bonus Is NULL OR b.bonus < 1000