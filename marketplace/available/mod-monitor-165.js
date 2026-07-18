// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZW1yXqfvaScGAZXn2ZTJmQJmX6n5b1olvv3mM6PDQyyUELR+aKkqh6Dtq5ZTAUWWMAGywJTCC3o8XPRkcncJdjAoyytlh2rW4Z01odDXkbN/tt/j+lmJRlxVlppiVSQ3pnwbDfztV+GvpNvR6Xd3kkPKZBLKI64aT8+YkhrXgGUjHcW3pAf55/DFwoBSWnCtBOkBzWVb9gDHBJvVUFiLU3xQJzNV9RNw2loZIhMksbsNNv4EAPjWbcJQCwZBc9futPYrmAfcshIjnZKhSa8+O9INjY1sjqbQq74zG6y3lplxhoB6RWJcwlMbU388+05h1ePZ+y2ErOyMkjcgSQZqImimgpQop9kN7k4t1ZlU4SLR776mukJASaWh0UgyyaFDVHENyTCFjxGEarbTLEYEjQ1SSB+MUJvrS4LvkkZmlJgnTnZO0q0R8dwLCVbNMD/1onlx3iAYx6SxLxInkfzKQcUO5cI/i0RRHdUigtxqTXEcpwBclSO7XUJKrhoXBztm1xHEwMmRPY/Aw0wonvNF1YFSDqGSBx9RArGVHjKmk4EErLwRo6WE4dVLrnM9y944BSrO44zNPW4cchc7C4T8twZ+k0S98e4pWUceCnWpZ2/qer083pakaV56kyKQzzV8xg6qTZeVBxmB4yFIMv4XANcbRMxN86ghVzNVZUO7vpviDgZLL3B2JdCcNlEbr8zMFW0IZSr39WlpMl90KHwkbuuN/w3Ur65hraMFl/Wviih5Fq8PF6rTweoJVVUAXBxDp8rAPNThvRU16pB46jEh2XUQcK1uSJ65qiJzEK7jMAzwu70ZKAqxB5sThN1XpqBUy82pjBKdauq+rZNHlKBnci9EnBAVSN7HEpSwWmxpAnsCwjBG6r1SfrkporfgdAM5O85x/f1MRzcA5Uvr7KkNcap2myH3sRaz2mkzjFdzramiEztMpY0SUp8ZVVs8DqGKWIQAoH3YE08I/xy3R8yCIyqsdwyT4hEHnJTvXlGi/wSjwIib/ZWvcINftLMsoTcvnBjBvzsfSOMGOKpPX+7uXtm88a3zm3v9zeVNadEmEb344n0EIxSStnAh5tu2gGIV6AEOEph21DHcV7LdHG/Y2aiK35mU8EAgu6MepEuR0qnocj0LYUzugT2uhCKF7tg9nsqwvwwCWLhCCM1BfvfKwIqJunafXtScd9vusyomHHByJxyfV8TQ+7iH4l5m4XoCwAA6ZBiCK4MlOEkOirVeSNxdsTpkWbmhWXJtzmIwWBTnVUXGxQsV1ayznRub4/ENtlcD+BVT6Pmxd2COxVZd+ivNEzJJL6FBdWdTgse8ciPprez6fLfA5lnSTkum9XV2bRcgXSCLMymnr0un6lVpxPKGV/mj4WHD3oVtCHWZXhiO4DZ027cgV2Axslw9zWdC0JQ==';const _IH='ac6e716dd799aa4807217c0a50e1f242fa560f87cdb742622c87d8c2c4ba4574';let _src;

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
