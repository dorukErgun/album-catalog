import { ViewCountPipe } from './view-count.pipe';

describe('ViewCountPipe', () => {
  it('create an instance', () => {
    const pipe = new ViewCountPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return "1" when the view count is 1', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(1)).toBe('1');
  });

  it('should return "2" when the view count is 2', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(2)).toBe('2');
  });

  it('should return "1.2K" when the view count is 1249', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(1249)).toBe('1.2K');
  });

  it('should return "1.3K" when the view count is 1250', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(1250)).toBe('1.3K');
  });

  it('should return "1.0M" when the view count is 1000000', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(1000000)).toBe('1.0M');
  });

  it('should return "1.3B" when the view count is 1300000000', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(1300000000)).toBe('1.3B');
  });

  it('should return "1B+" when the view count is 1000000000000', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(1000000000000)).toBe('1B+');
  });

  it('should return fail when the view count is negative', () => {
    const pipe = new ViewCountPipe();
    expect(pipe.transform(-1)).toBe('1');
  });

});
