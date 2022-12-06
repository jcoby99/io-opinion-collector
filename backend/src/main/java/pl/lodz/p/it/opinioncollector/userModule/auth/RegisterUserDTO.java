package pl.lodz.p.it.opinioncollector.userModule.auth;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisterUserDTO {
    @NotNull
    String email;

    @NotNull
    String username;

    @NotNull
    String password;
}
