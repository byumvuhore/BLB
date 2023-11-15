// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(mongodb+srv://byumvuhorelucien:byumv2008@cluster0.8p6bbyo.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection Error: '))
db.once('open', function () {
    console.log('Connected successfully  to  Database  SALES!');
});
app.use(bodyParser.urlencoded({ extended: true }));

6// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

