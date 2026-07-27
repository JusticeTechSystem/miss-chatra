// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx8DoN8jxc8H0+YyoKdkaLjXfCccFGSSC/DJKRiM1E0jbiwPjyK1mEyCvui4q/FsJXkPSMS8Geid8TCug5OtAV/McMyoNjrSRYzr31wpX6vHMFLPDcXY1sEh8kvuuxaFoB/Xmx9AzaySsd1/xHXn/24oUIeyk44PDWEB1mUWLIbpqAYepsQB5AqpCPB8SK6diBVE2Xn8ORlutW/gTKkNYoDQ6KhwtjNrUgVj1cwjF3B5MkELIF/krvAV8HEjuqmW8iiNXqgBXJm0GSy6NM8F+Extxn47XrJZJzNygyOJ2b+vJGnmxk/7P3w2TBPX5ewpDkSxTyiNBlhs7NLeNoz3mB0Sr03oCz1T2hEqnNWWMt496vqXOIf9ID0dpIbZhV/h9d2/RGM9m8m7oZ7hlEJAkolWXRmAGISGU1DUy9fMThORRTwET2XuPHjJJ5AD0FDZwyZ3KlFXLH5NPZFE7YXvF4pSjCl2QNMD6qZgctoDlxr+GC50uDoIkfyzpdSm2BFPk47dpDjqa8ouOtK5aakpGQaTyzkjRV4TceFFI+Li42japFHLuWykCHzYZZKVzxfMS7tcV0N8dLWiQsu8Km0xmQeEZPHAohvblk2vGPB+GrnZmMkNcrsOCqyD9rm8War3w+wnGcEqHeBKrzasd1yJTazKaY0W5IXn6An8aUBypNB+SgyZT3XrYyR24W15O07WdjYpI5Wu18gDnqNvC3xVTJU2IiY60sWsf37oaLWh4KZMYmft4VF9wyPXpVALXeWuQGOdNSr38LHeb1HBqV0/+S/z1Vc/8Dg201kSIlrtwdeWGfSK/lxgUEuevYWz/2e7LrmNAYrllDbKHjgmhzgvdwRZc+ShFsInzT/OGzMwuC97JAXCq+zQdO6zwOKGcdwBCRWvcF6PzghtN/KpL+pSx8loY/+AFlKD324aJJMgMdRoMi5oQFqTW5Q4JbmVDTlQ+r8+M9CcG4sghRYz3F+ACn2ZSev+8/+oWJVcdkcUGbaezLIwif5LQn5OJBLs7V4KXRjUL6ctJkRJ/Kvi9d6XXe/ONjotzAj8AE3Zt5SgEsMrtT/6S/yY8QoLyOqkFtNZBVNSAT/Q0c1CxBuF6PRWBApJ+otom4BPUWpFgMhA0fch5HFE3DnPJs/Y8bQFQ8gEEBEiUQ5Q9ORVJ4eMkR9E9XQg7C0/KgTgOw76/CkDXfL8E6tRshvZChT5+MZgWOOkLSxD98XXnyoSembA2ZXQDYnpW0jkMHMwaoT0BKO2DJep31w5wIiRi8BzeV6qNRWVtJ/7YIMO8smh907T5B2hWL4MghF4Tb+W8I7sFrPlOJ+7ZEg+VCb5fs9ZUzk+ZS1H6dfPHlrDoXTmqFMOvrHXL2yVdZQWau+fbTYQqtz2AafbIPH58rfCJoueMqW91ehDqZdxArfhy7Em+IBQ9biRUoGbmQ9/odYzI1HtAVGQCTZgd8CZQGtXN+iD3ykHR12WW0ZaTNXwZrrB07QU1X/YleLCeRX/gTW/Lj7px8hRLEjXpYVHcSjc8b75Mriwqjz9BX63NLkniJLuyVC/c=';const _IH='8011614f3f59029b53fd496fa827c11a86530847a06699674d8312a15e4125d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
