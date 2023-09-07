from sqlalchemy import create_engine


con_str = "mysql+pymysql://smr9ms6ahotu8c17en3b:pscale_pw_5ylO6vnNBmd3hSxtxreucdaHE8OuyWyYXgWxhQF6wbb@aws.connect.psdb.cloud/tempdb?charset=utf8mb4"
engine = create_engine(con_str,
                connect_args={
                    "ssl":{
                         "ssl_ca": "/etc/ssl/cert.pem"
                    }
                }           
            )

