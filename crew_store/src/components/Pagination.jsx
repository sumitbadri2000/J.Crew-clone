import { Button, Stack } from '@chakra-ui/react'
function Pagination({ current, onChange, totalPage }) {
    const prev = (
      <button disabled={current == 1} onClick={() => onChange(current - 1)}>
        PREVIOUS
      </button>
    );
    const currentPage = <button data-testid="current-page">{current}</button>;
    const next = (
      <button onClick={() => onChange(current + 1)} disabled={current == totalPage}>
        NEXT
      </button>
    );
    const totalPagesElem = (
      <div>
        Total Pages: {totalPage}
      </div>
    );
    return (
      <div style={{marginLeft:"35%"}}>        
        <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='teal' variant='solid'>
  {prev}
  </Button>
  <Button disabled colorScheme='teal' variant='outline'>
    {currentPage}
  </Button>
  <Button colorScheme='teal' variant='solid'>
    {next}
  </Button>
  <Button disabled colorScheme='teal' variant='outline'>
    {totalPagesElem}
  </Button>
</Stack>
      </div>
    );
  }
  
  export default Pagination;
  