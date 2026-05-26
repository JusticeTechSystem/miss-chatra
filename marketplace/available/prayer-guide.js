// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QJSe8BabahFC08k6EjrQWdAECsV4+V3ehF+0iLpw8bcwEJyRAD+X09OW6b33gQxXkVl3XXuDDpF+Hn1El6fofO7U47mppVwhpdHtfxC8Zt98DyNgTBWrssnHPfHF2CuJ14DoW2oVpidbaSfsjSGxGiU7al2wVIyfUUo1QiZU/p8qlwkSH8y/uBWikL3ppzArqAgrfn2FvHQdISDUKTWrPRLmtO0zJ0RrCO3gzgJqPLW1FCtGRws38SPGXVVwa/tluin96tna27MtrFEkv4HPPeNinnYmwGoN8x1MkOtXFgaM5IVzrTds/p+EP84wU0nL4YFDJSl/2t7l0QUidzYuNylA5bP2D5GrPGcytZb4mHfel89loNsDEWgxYbv+If43XW0AHo4BCR/Hc6hxrhq09XOslV1yvANDNA5KhXd2qd1qMUmmFfZfcA0waZ5+7qyvfTPmQnQgcOKGqPTcaEu/DfYswL3SsMjdtpmWTrppQdF9nqn7LmEfsxfZy9S7cV/7PSoM990/7xFBEkY5/iya+KIWnXEAmWTFyM7YvhXlAXU2J5bWcArjMaHgveceZl/XxlSqZvILhGJluwi/OXYAlt6KOBb3V3pYeovuyHFo2nKOhTGjvNHzLghYb3sNc7U7uIC9UHKQ/F7KXvpYtx8eij0iyY45NsY9EHMK+RemayiNuN1y0RDWvt8/bHsTifGmOaBTUxOsJQi/91pqqw2MdmepTP/uuGju05BAY9z3wkjEbJJOC/9o38OfS+vj17xx1kgLwm/LOAZ7U2UYPHlhu6I/kN54pi/nGhleZiUO2ZEEQOU87GoSnr5py1TWUbjuLECC9ER+hNvF60F9PEIJVVKIfYGMTugEY1jpVvQn++wNnjXoV8ENRufuLiMcPuhbmKhggIPn0PKZCpYPKuCqZ6JP0U1/r1OYcXeXxzu9e17HRWo1VNGkAAXcPP1rz2dQolMwO2PIXyn9wPSeTY4VGz7QYFwzQLXzzc/ZlwEdM9qogH8OjMMvfhxx8AUV9Bn1I0oPoJqO8MHkbalRgJO/0tfN8qzaIUJSZdyPHJul/n1tlmjbv/aif5mC6ejArTUN+nJp9OgmJmyLpyMJE+xB9RwAEMqtq+JtwB7h/kE4KJIejT9WougXcBSmqVXTDSYzABDAuXcGSmZAUCWKPvt2oGyyV4NnwvuV3jkXtHQEeaF9BOH73PDdgrh2Rx7WyMJc1lHeSD5l0s8gEYNEAtmITPiEyhLj+gDfyRO6exGmNvaqvi1HaUhSxMCzvs9hlku7dbhS8I4rouDuwSIw/05NTcGqVmcbMNd5orgftw7SFQWti0WM8DHvTM706LBblfRme5Or5zj0+e2c+yiG/N66w4yANOev/0unFguzw/NKwx21id1nxSAQFaIq524wsF9PoHi9fMgX35bYgF2f0JWy9WZKiVEttPouDZrQpq2muucamTbGBeNSS8mzJkHJ3mVtYO17ktmjoXr5M3+fIQQQh3liDsd0ZEovuc1O1AhloKVtY/zHV16avdZQrgayWhVfduLhSyYiF2mx0JTy/s5mxNlDWqDU9AhQXsqi4f2gI47US7TwBhK6zAEgECj2pAKVxOosGE6mR/z3vucIpSs6HviKOVPjOvP0ljJksU/jDCxMT9CPfjnriRuuez6pqlbtp5dnbM9f17XzHZIH5izuDB8fBJ16XFKscQXOPa2XZ8gYfrls2mg5bxetzjv00XkLNhdm2k4gwua/XAzI08XPEVt7JmL1sDsIpZhsIc9znSu/NF0f4Hwr9r0Pc+uZdVfT5AwAUvKjB9vwjDNeTLe46mMTkhAqPJzcHIQtyIhzfQ==';const _IH='c8dcc8b17f1421222de946dabc6bc9c3fee44e7aec1ce0e297309be54ca17e81';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
