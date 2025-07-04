echo "prev commit: $CACHED_COMMIT_REF"              
echo "current commit: $COMMIT_REF"
git diff --quiet $CACHED_COMMIT_REF $COMMIT_REF docs package.json pnpm-lock.yaml netlify.toml scripts/docs-check.sh
status=$?           
echo "diff exit code: $status"      
exit $status            
# This script checks if there are any changes in the docs, package.json, pnpm-lock.yaml, netlify.toml, or this script itself
# If there are changes, it will exit with a non-zero status code, which will fail the Netlify build
# If there are no changes, it will exit with a zero status code
# This is useful to prevent unnecessary builds when there are no changes in the docs or package files
# The script uses the CACHED_COMMIT_REF and COMMIT_REF environment variables to compare the previous commit and the current commit
# CACHED_COMMIT_REF is the commit hash of the last successful build
# COMMIT_REF is the commit hash of the current commit being built
# The script uses git diff to check for changes in the specified files and directories
# If there are changes, it will exit with a status code of 1, which will fail the build
# Uruchomienie gry (gre)
# Tutaj możesz dodać polecenie do uruchomienia gry, np.:
# ./gre # Jeśli chcesz, aby skrypt działał w tle, możesz użyć polecenia & na końcu
# lub użyć innego polecenia, które uruchamia grę
# Sprawdzenie, czy gra działa poprawnie
# Możesz dodać dodatkowe sprawdzenia, aby upewnić się, że gra działa poprawnie, np. sprawdzenie, czy pliki gry są dostępne, czy
# czy gra nie zgłasza błędów podczas uruchamiania
./gre       # Jeśli gra działa poprawnie, możesz dodać dodatkowe polecenia, np. sprawdzenie, czy gra jest dostępna w przeglądarce
# lub czy gra działa na serwerze lokalnym
# Sprawdzenie, czy gra jest dostępna w przeglądarce
# Możesz dodać polecenie do sprawdzenia, czy gra jest dostępna w przeglądarce, np. używając narzędzi do testowania aplikacji webowych
# lub sprawdzając, czy gra jest dostępna na określonym porcie
# Przykład sprawdzenia dostępności gry w przeglądarce:
# curl -I http://localhost:3000 # Sprawdzenie, czy gra jest dostępna na porcie 3000
# Jeśli gra jest dostępna, możesz dodać dodatkowe polecenia, np. sprawdzenie, czy gra działa poprawnie w przeglądarce
# lub czy gra jest dostępna na serwerze lokalnym
# Sprawdzenie, czy gra działa poprawnie w przeglądarce      
# Możesz dodać polecenie do sprawdzenia, czy gra działa poprawnie w przeglądarce, np. używając narzędzi do testowania aplikacji webowych                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                