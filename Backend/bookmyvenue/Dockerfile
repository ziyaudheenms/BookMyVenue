# 1. python dockerimage with uv preinstalled
FROM ghcr.io/astral-sh/uv:python3.12-bookworm-slim

# 2. Python environment optimizations
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1 \
    PYTHONPATH=/app 

# 3. Set the working directory first
WORKDIR /app

# 4. Merged System Dependencies (For Postgres binary compilation)
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    libc6-dev \
    && rm -rf /var/lib/apt/lists/*

# 5. Create a secure, non-root user (Using proper Debian syntax)
RUN groupadd -r app && useradd -r -g app -d /app -s /sbin/nologin app

# 6. Copy lockfiles first to take advantage of Docker caching
COPY pyproject.toml uv.lock ./

# 7. Install Python packages directly into the system layer instead of a venv folder
# 🌟 This completely prevents 'ModuleNotFoundError: No module named encodings'!
# 7. Install Python packages directly into the system layer instead of a venv folder
# (Removed the invalid '--frozen' flag)
RUN --mount=type=cache,target=/root/.cache/uv \
    uv pip install --system -r pyproject.toml

# 8. Copy the rest of your project files into the container
COPY . .

# 9. Fix Permissions: Ensure the non-root 'app' user owns all project files
RUN chown -R app:app /app

# 10. Switch to the secure non-root user (Everything after this runs safely as 'app')
USER app

# 11. Tell Docker your FastAPI application will listen on port 8000
EXPOSE 8000

# 12. Run directly using the system-installed fastapi production engine
CMD ["sh", "-c", "fastapi run src/bookmyvenue/main.py --proxy-headers --port ${PORT:-8000} --host 0.0.0.0"]