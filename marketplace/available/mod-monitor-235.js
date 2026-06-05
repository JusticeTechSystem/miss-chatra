// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t4KKW9JfH2GMwCzgI+IDSIzfff4hJlEgLZf65liKKnnmME53NZ+2nvByS5hwSzbVfIObTzRzpa/XiYS+qp0cOr6m+w7yyJ9j0RPZAt7lm64eV2sidAo0Op5VcHF9YKrrrSaRGiMh9FXiJj3fcxyT4SMqJhsyw+GTMD3TDTNqD10KNUHqdBmwdWU80FB4fVZTrqeDKCYA6H2izTMzc+XKpU4ZMkkwURx4Je6AAbhf8kjePLolrWD8vCaI95/FUiySFIfgKgJp3p5XEnpJxgmeuLt9OL1ALdHB62XLV/Hs5l7zpD7WDvVk9wfQWKMcqsgr3+i1kYuD0PLF3Mh0cnfnBg1GI85HLCjne7vVigir/pOBWoMwAuOXwAuIsBVGZDyczhXSKYei4PorJJbV4UEWQQmJRYdk0C9f++v8x90nzkmnz0/kc3Ofh1NdYCe2LWlQtlx8eSVyht2H+7Ovl46jlGE16CSRTEW+UusAqk7UL5n0zLcrRGTVXh6PzrysVBv+xmqvpWtsJ7amzRW6ARcLkLX0QD7b6r3yVia6XkeMG+OBbN/mdZ7Qp/fgqgIHs9r0MZfOD7MWhE7UU11dTMRdyAgQoMKCIMTBV3c2auyeXFCjtHUf3qLUW+aINKfKU6xC+COAEhGSDEFYR3bijZ/xByjS4XhyHOC5QVqQoBOy9FbHUeqcJdEWFxGuMhSPvPmEj0jPZmxDLJKazLS3nvux2iVCT43dvhe0HPUMbe+tqgRh6jy3dUZqMzxnibNy0aK9xDEKQtGBHVQSXiiD+Ixo8gn6gr+ra3DJ3rFJPl73hpkDpZtYGZ//ogF1lXJ2jxP3m54cEtM4+r76tWQpjw9Uz8xY0XzcnC9gYrLgnGG2LstXyd7r6GV8jhKLhIETwSAEvZxga6ipU7+zoLSAynrVNmrqSQESaLDMxP+0zb9eiZJXMNjEUnCyL5YTjRrChARPUNFhdtxPRhQLWSQxV05jXk2L1Spv9SvU8I97Fgxf38MhPSMBEhNukISJjFFKW63Sft0wtYggNNVqSetkTVu8ACJ7dufNwCTODGAHZ+R8pzw0dXWSY7gZctba1By+QQURH0htgZMyLpRjLq3yeRmIJHAhiPRQv0Sn/yMqGtq81T/CYW9MspT2erkRQkWGsWsamgZNC7Qt8gv+I5IMTGdLkpvkMXQJjou78lmQzwL6AfKGE7FNp9TT0YtHBwyzw8XtGmMGY1zF4QuZaxltbQ5PU2Gax8dKAPtt6vqifLoKY4FL7y/B4pykkc8E1Rjp6xIsgBCSBlS+6D7EeEByXX4cTSaKllyysQj1ijQBxQ/uxYpIHPgv9DXhjbyVkCxMTW8Rf3ISBrU49qXjQSCFBX3Ba53txOLy+VJpZBDUpk9KLA8WQ7aHa5hEBNogphvENF4zx6I=';const _IH='f454e2d42c4dd87f4b4a0f8063050abd2b0b7866dc79865f9aec61289f2a5713';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
