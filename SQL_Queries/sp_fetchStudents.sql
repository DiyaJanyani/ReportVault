USE [reportVault]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:      Karina Karira
-- Create date: 12/29/2022
-- Description: fetches student based on their class and year of education
--
-- Parameters:
     
-- Example: EXEC report.sp_fetchStudents 
-- Change History:
--   5/15/17 Jack Brown: Changed calcualtion method( example change)
-- =============================================

create PROCEDURE [report].[sp_fetchStudents]
 --DECLARE
AS
BEGIN
		SELECT
		[StudentID],
		[FirstName],
		[LastName],
		[UserName],
		[Email],
		[Mobile]
		FROM report.student
END
GO