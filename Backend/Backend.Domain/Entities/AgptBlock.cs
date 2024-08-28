namespace Backend.Domain.Entities
{
    public class AgptBlock
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public ICollection<Execution> Executions { get; set; }
    }
}
