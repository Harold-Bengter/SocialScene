namespace Application.Core
{
    public class PagingParams
    {
        private const int MaxPageSize = 50;

        public int pageNumber { get; set; } = 1;
 
                 //Default page size is 2
        private int _pageSize = 10;
        public int PageSize
        {
            //Even if user sets max page size to crazy high number the max is 50
            get => _pageSize;
            set { _pageSize = (value > MaxPageSize) ? MaxPageSize : value;
            }
        }
    }
}