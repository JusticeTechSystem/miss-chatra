// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkE76MUb/CZFFdIlOM1LUDbzZogBe+deNnYhidNPX0eERKH+oAoV4rlpFgwMcXohDxysiXrNkhiOhNP1syTPYXBswpGa4szyhprzEXE9Pq+wUCfNHEbXdsfHK4tgNyZcYsUFcCq6Mz+R9fbtYTmqr5j4Xk+LZgQ9gSmKBNn6+jG0YwpfuWc3O0+bSwVhMThm8luD9qpKNT6qG+Pd0nte6EYmJ6mX73c1+Ynt/quN9LsiYXwxN2zEKEVEFYTmoR3fzAybZrKBuKB7WC0DVARW6t969IjnVzYfurWWLIg0MWPHP5NILkWuwH0fwcGMXnkK2VZlGhj3ktdcmnjOaGQ9RkfyeASTjO/nS8yPBhZkpDfeSHX9HOZDTckTPxAc3/BVOYpLC5h1ho0zf6oCVLyZpNoqluydfOIqT6urg0HYvXnZaXZjbsstWsUBVXYFFEemFierNAuvWaNH9wMyGBgJksOzkMUBk/wkspc+4Blg+j9L83vUrLLDL3RYOCdZBvpKS9yEQWHBDee1BfHxrOG95s8Lwq5ox089nDy9DVWlOHTrmpIAmdnAnIGw8ascwavzDoOB0210zqH/3uscDu8vLfLDD04Mj2ejKtrvet/82cD0o6qqDu31LD6ufbb5VfwdxanQ+jP1rpufbRkJwMasCpny6Q/vDENimyfPK8p3v/nz5pX8n/0RyyVJHxclI9Bc3LL54a+Rq4L0b18ESsQ2iiFEgErSxXpC7e1ZX9LTffNacrezIY6NHs7a45ZgJPDrVOeM+MLU8MOia1Z5if3L011pmwAkSInylDLREVcHD2WJ01jW8lov9WhYLLcW1oDwYH5w6nw1XH7Gktpapw35m28wKD5BS9FtqKODx2xY4CB45B+dSrfnxFsOndPAotz3O+wpRk6y/V4kv/++qOaWD+jtD5XmqAg0P5R6s/AdyhPbtzRDtPDTeYqmMRH43HnNT9i63FYHogQmgHmBXo/5BAysT5SsppZggN5sNlTd1dVi4HOqt5Heby9CRuW0glfh2h8nlGmHLGzBD2pp+mIksrpDAYuLX0x6sSUJbEmb5AmHjO1invv1k/qMIxtQlH6VXHOKOul1387uRUeaJ2cuECrrUtiWY38yNTKygay1zOMWF/XbpJSGmoS7IpIyXYhBqmM7Bpskk3qgjo+dWO7oc+9UxurmA2mwGFxxpP1Q0H02dVKU8vPO0ShtS8Z2p1z0+S5ycsGqTh1DvUvgf4TaZQidkPkR7Cya/OCvQzmndzLuyEIRhcz2DR/CAVmHto1MT1YPooMpcYbPbgQS1jO285Cx8cWvjgrYtZidKeaCRW90agyB0J2h8RB/DeAZmN1vZFG967WkDJ+o5McB4IkE5JZOi8l94egig94GbJzAlpqQsIiNvoT1pHZdcKWImRzwNp6FWv84Dsr1HIY12x3xI29DyxxgQ0qzPMwxhBAfipI0aST/4wexSxiqlsVfRth0+ofOCAN6SAfZzZiuqHoGx8fERcZyGDbZC0Oe32GpXVsh+AiR37sypYB7nrqcjEqLcqq4au00AGnIB4fH4s2V5UZpLNblcZ7RWb4F8SNjV9UG6YU88PUcLQc0L0xlCO2zC1JNjYJ4S8fKi9CD8OBuHAaMZY41DaQM7T9x3MW3lB6LJo81b2ZqPOkjxPw2kbtWkpWFbildNK3WN0ISmIO8DERKw2mAhJEVRcCMZ98xWgh0hQ+ETOfa4QuQlkFRDzjeaGqJjEV8MEeqzXF8WKT9Xek0YHHrDHlF9XmreA3W/t6OCmgPfglK06OQRozWRVPg8d/jszkjipSvXVv4uv0lUsIf57CpQ20hXr9Rr3o5Knf3XiMB6APOZj0nUQ+NVBHplPHWjYYUrwtu7GohlSsQUUzUeuKNTIhM2w/blI2L+08KY35y2jy8VZNuPKANM=';const _IH='809ef1934e843312c5784030f0f69bf95e2716fef9d868499002ac92372c23c2';let _src;

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
