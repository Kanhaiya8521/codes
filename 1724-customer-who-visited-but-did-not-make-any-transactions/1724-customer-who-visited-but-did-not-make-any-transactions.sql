# Write your MySQL query statement below
select Visits.customer_id, COUNT(Visits.visit_id) AS count_no_trans  from Visits
left join Transactions on Visits.visit_id = Transactions.visit_id
where Transactions.visit_id IS NULL
GROUP BY Visits.customer_id