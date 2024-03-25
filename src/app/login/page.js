import Button from '@/components/button/button';
import FormGroup from '@/components/form/FormGroup';
import FormInput from '@/components/form/FormInput';
import styles from '@/components/form/form.module.css';

export default function Login() {
  return (
    <main className="pt-12 bg-dark text-center min-h-screen">
      <div className="xl:container">
        <div className="form-header">
          <h1 className="text-h1 text-center mb-2">Log In</h1>
          <p className="mr-auto mb-10 ml-auto max-w-[24rem] text-center">
            You don&apos;t have an account? Then please{' '}
            <a href="signup" style={{ textDecoration: 'underline' }}>
              Sign Up
            </a>
          </p>
        </div>
        <div className="form-container pt-9 px-7 pb-5 max-w-[26rem] mx-auto rounded-lg bg-[#f3f7fd]">
          <form>
            <FormGroup>
              <FormInput
                type="email"
                label="Email"
                inputStyles={styles.formInput}
                labelStyles={styles.formLabel}
                id="email"
              />
            </FormGroup>
            <FormGroup>
              <FormInput
                type="password"
                label="Password"
                inputStyles={styles.formInput}
                labelStyles={styles.formLabel}
                id="password"
              />
            </FormGroup>
            <FormGroup>
              <label
                htmlFor="remember"
                className={`text-[#555] ${styles.checkbox} flex items-center justify-end`}
              >
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-[0.375rem] accent-secondary"
                />
                Remember me
              </label>
            </FormGroup>
            <FormGroup>
              <Button
                type="submit"
                className="inline-block w-full h-14 bg-secondary rounded-3xl border border-solid border-secondary text-white font-bold text-[0.875rem] uppercase cursor-pointer transition-all ease-in-out duration-200 hover:bg-white hover:text-secondary"
              >
                Sign up
              </Button>
            </FormGroup>
            <FormGroup>
              <a href="forgotpassword" className="text-[#555] underline">
                Forgot Password?
              </a>
            </FormGroup>
          </form>
        </div>
      </div>
    </main>
  );
}
