package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail()

        );
    }
    public static Employee maptoEmployee(EmployeeDto employeeDto)
        {
            return new Employee(
                    employeeDto.getId(),
                    employeeDto.getFirstName(),
                    employeeDto.getLastName(),
                    employeeDto.getEmail()


            );
        }
    }

