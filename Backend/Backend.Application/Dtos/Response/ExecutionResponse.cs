namespace Backend.Application.Dtos.Response
{
    public class ExecutionResponse
    {
        public int Id { get; set; }
        public string Input { get; set; }
        public string Output { get; set; }

        public DateTime DateTime { get; set; }
        public AgptBlockResponse AgptBlockResponse { get; set; }
    }
}
