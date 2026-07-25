// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaSNtcBRnfFJQxsSBsI+MDuKOBXHdq3DkAD64gFzGm6xokTLeiCPjQd1mOqSffHtxDFYt68YthkYKpHGDQOR/tQgP+5CkhBetiCWkmbs2+6w45SbdsGeND9Ca0PKgNfylJAELHYW/uXcXI6/k1JVrXQ7CE/5BMnLaAO86OVgMKY0THi1FFw7hAMU/9tjQ1m0PEyC4Ia+Uz7oi17qPcztbr6HcBov7ywHXJiKObxcsnkehfDV+KPsesQQ2ohUj9960nsOOigYGmVbxOCBit82AZ9kGKBprx5CrhVCU+UkB96oZZDJmF5CfUlpCVrS7c3lESMh4i0sy4mYq4mA5MiKdGOuV5f9t9IsHHKNLPH+m3IX0/XwB+z3KmeEwx0qaOs6cl6A36jRup8kA2j9Yl1YYjJj7FdwbA2GEqUfy0qAIjv91GVVebAabU4Vooq0HtJ/1r7O1H1Ap8NXmWhnPXgQUYoaZfJ/EhOscEee12P+TOcklZsD7K0cUgn9YmqCPTkmUjELwczxpKvCywPQjKv+10lphpkFVqgtRjO/k4CgfW9g+gslAeuFu33aKT5QtHDDINJplZdTJAEvEDlfLV9iXUK3hv/5jLGux/ESSGQcXTurlhy7sp/TRBWn8n+fzkUKRKgYD7a5qCU4LfGegX3lIFwakGlr8JEjLRbGvhZI9WgGY1zOAMndLr7pGz7A9+QP88wZvleuqxj9+mCMin8z7ftcgw/s9HvbhNnY7QtqTX/2JttazvRhpDIWV8dMNICEvsZEZP8F66+0DLTnly8qpJC3d0yRTa5WFGDAIAUcN4tjxRF051a/QljMsRLQRUP6l6I1Ci+/xoIyYgPBztRoWgeiZZD8bV4QMYgrL5AoIm+700g/lMoj/CZqghr0LeoYL4O8Gpjl+QQdZHeoqmLwz6vS0b7YYzM3He99srUDiZPjd6TZ9N4tRXkUmRyhb/ronf/8iWfG8CSRJ/R0Y5Kc1k4rh7R91wtvlJ0SHlY7rbrHjG7p2/hUcRF3PWFb6icCTnxfOBqj5w+Etd7TJ3fh65/kkC0MUgfl+O/ON8DPBuw/S2bwFJ7s4wQO8YkUxO8RTOQQz2/QqsHmIBZfctIf6VCEuw46ThHJfExlUu0jY2i29vz6/OT675ukRK7wQU/A6CA3G7NE5r3OdLkMibxy5M//31cafZVitjG/dknds48GAO1Y2JSyEIUusAzVEZR0V0q20yXJI7QA1y+tLvV4pjUHJhVZmXsQ5EfBm4vfaPy+Ay1wh6bpU3c1RqOqBHFo9pHrjLTeyc03kSXE+bkRtrpX8t2kLADqIYe7Uk5aCCg0SlREimw02+mgPAf2aFXICVdctEMwHaTShj+T9qbJlix/WqaYZV7KcpMcphepCWEkz2GAajRTDEAlP2NIl3nohGXH2zeUIC7nw1KdVyQyxjwOUoyCOWxr1UAizcoab73hrRusZN0/7BFjTqA38N+sQxJ1NJxQkd5YO1/Tusn5yOUGEIsAozrtOdH7bnRfXmK8HUFZJXdr74INkg46JchRjbgCuibDEDd8BCVRMkznPBNZ0XJQ/eU/14PWVJ+3dBwZdXoMT9u9fxc2bruu9v+IsV8+UnpO4RVS4AZQ4A41IYgnoucct2o7CjAKl195pNLCgQT6n1X8cGJRqRWO9vXJKc9rpJDbLUyE1z1rBsio1RmGswHC6NtXELn0VWwmAr+kMSEFYCleLlyTlSlEbcI5n1hVv8vVDyBLfCSxl5jFT7+/Oxvc2xuXN87WtvPCHsLO1V+XxP0S9pLKcUwEZdH71nOxoIg0iNijrgB948GTZ74LI7kGfJGxA51yczsk+7afFbYJzSRN0R8/Fv0OdciQMf9GeSJoC/10E/ufxz2rMo60EaLot25Q==';const _IH='812709177f8151dd47e68ec7e08c6f95b7e022001c4eec916faaf61d62848716';let _src;

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
