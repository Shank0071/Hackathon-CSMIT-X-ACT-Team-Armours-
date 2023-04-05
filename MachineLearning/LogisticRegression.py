import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

# Generating dummy heart rate data
heart_rate_injured = np.random.normal(loc=80, scale=10, size=1000)
heart_rate_not_injured = np.random.normal(loc=70, scale=5, size=1000)

X = np.concatenate([heart_rate_injured, heart_rate_not_injured])
y = np.concatenate([np.ones(1000), np.zeros(1000)])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Preprocess the data by extracting features
X_train_mean = np.mean(X_train)
X_train_std = np.std(X_train)
X_train_min = np.min(X_train)
X_train_max = np.max(X_train)

# Normalize the data using the training set statistics
X_train_norm = (X_train - X_train_mean) / X_train_std
X_test_norm = (X_test - X_train_mean) / X_train_std

# Train a logistic regression model on the preprocessed data
clf = LogisticRegression(random_state=42).fit(X_train_norm.reshape(-1, 1), y_train)

# Evaluate the model on the testing set
y_pred = clf.predict(X_test_norm.reshape(-1, 1))

