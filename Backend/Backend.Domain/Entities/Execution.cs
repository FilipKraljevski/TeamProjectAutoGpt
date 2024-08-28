using Newtonsoft.Json;

namespace Backend.Domain.Entities
{
    public class Execution
    {
        public int Id { get; set; }
        public string Input { get; set; }
        public string Output { get; set; }

        public DateTime DateTime { get; set; }

        [JsonIgnore]
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }

        [JsonIgnore]
        public AgptBlock AgptBlock { get; set; }
        public string AgptBlockId { get; set; }

    }
}
