import json
from setuptools import setup


with open("package.json") as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")
with open("README.md", encoding="utf-8") as f:
    readme = f.read()

setup(
    name=package_name,
    version=package["version"],
    author=package["author"],
    packages=[package_name],
    include_package_data=True,
    license=package["license"],
    description=package.get("description", package_name),
    long_description=readme,
    long_description_content_type="text/markdown",
    url=package["homepage"],
    project_urls={
        "Source": package["repository"]["url"],
        "Issues": package["bugs"]["url"],
    },
    python_requires=">=3.9",
    install_requires=["dash>=4.5.0"],
    classifiers=[
        "Framework :: Dash",
    ],
)
