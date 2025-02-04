# Write your MySQL query statement below
select v.customer_id, COUNT(v.visit_id) AS count_no_trans from Visits v
LEFT JOIN Transactions t on v.visit_id = t.visit_id
where t.visit_id IS null
GROUP BY v.customer_id
