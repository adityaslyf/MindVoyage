import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import "./Profile.css";

const Profile = () => {
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("/api/profile/:id");
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="flex flex-row bg-[#141627] overflow-hidden w-[100vw] h-[100vh]">
      <div>
        <Sidebar />
      </div>
      <div className="border-white border-2 scrollbar-white w-[80vw] h-[90vh] m-10 scroll_container rounded-lg overflow-y-scroll">
        <div className="w-full max-w-2xl mx-auto p-4 md:p-6 lg:p-8">
          <section className="flex flex-col space-y-6">
            <div className="flex flex-col justify-between ml-4">
              <div>
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24">
                  <img
                    src="https://rishabhguptajs.vercel.app/images/profile.jpg"
                    className="rounded-full m-1"
                  />
                </span>
                <h2 className="text-2xl mt-4 font-bold text-[#D1F366]">
                  rishabhguptajs
                </h2>
              </div>
            </div>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Avid traveler and adventure seeker. Always looking for the next
              place to explore.
            </p>
          </section>
          <section className="mt-8">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Recent Trips
              </h3>
              <button className="text-[#D1F366] mb-4 hover:underline">
                View All
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    width={200}
                    height={200}
                    alt="Destination 1"
                    className="w-full h-32 text-white object-cover rounded-md"
                    style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
                  />
                  <h4 className="mt-4 text-lg font-semibold text-white">
                    Nainital
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Enjoyed a lot! 😀
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-4">
                  <img
                    src="https://static.toiimg.com/photo/msid-99983738,width-96,height-65.cms"
                    width={200}
                    height={200}
                    alt="recent_trip"
                    className="w-full text-white h-32 object-cover rounded-md"
                    style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
                  />
                  <h4 className="mt-4 text-lg font-semibold text-white">
                    Kedarnath
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Jai Bhole Nath! 🙏
                  </p>
                </div>
              </div>
              <div
                className="rounded-lg border bg-card text-card-foreground shadow-sm"
                data-v0-t="card"
              >
                <div className="p-4">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYYGRgaGhwcGhocHBoaGhwcHBgcGRocGhocJC4lHB4rIRgYJjgnKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzYrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD8QAAIBAwIEAwYFAwIEBgMAAAECEQADIRIxBEFRYQUicQYTMoGRsUKhwdHwFHLhFfEjUoLCM0OisrPSNGKS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKhEAAgICAgEDAgYDAAAAAAAAAAECERIhAzFBE1FxMpEEIkJhgdGhsfD/2gAMAwEAAhEDEQA/AKXD+Atq8xAA33/LtW3w/CoiaRp6nufpRv6w9BQXeTNdDUpdnfFxitGZxfhoZiVgDoKteHeHhCGnO+35EUapAmqcXVCUld0atolwQwUgfSjNfQCBBHY/lFZ0nTjGM1TuFhWHpWa5m+nBo+SAP52og4FBXP2uMddmYCj2/EXnJmpfHL3DKzYHCINgKpcTwoIgAR6xVO25ZidUfWrl0yAobUeeDSxaLTM/ifCQ2NP0j8qNb8GHJCo7/wCK07FpyBMEd+VaASBgCk5UEpGTY8OK4/OMn/FW7fCgchV1VNRYxvFLIjKyhd4NTkiTVZ7rLjTJ9MVolpmGX6VAT/zAn0ppjsBwd9zgoPtWniMKJoK6o5VNVfrRZEg1skDYUVX7AUFEbrR1FBmyD29VOtkRBAqTPFVb3iKr1J7CgVPwXFQDAp9Aqlb8RRuo7mBVkPQDTRMWwKfTUC9R95TDYRkmhNapa5oLuxIgEdaASY7WxTbUtZ51AtNFodMfXQy9QuuRsJqGpjyii0NRY0jvSp9Z6UqLKxZzCoaKopI1GUiu4wSBg1MNRRampixUtopANRqLGr68JGSJHan/AKZScT8xWblE0jFmYaLaQk7VpJwcGZHzFWGcj8UDtFRKfsWkyCN5YCepioJwxBkJ8oj71aXiO8mldvyIGNs5rG37FWJOIc/+X+cUk4sydSlRy/ahI7jnPrVbi3DRE/XH0oS30Istx7RgD6k0P+tYglkGPvVRE7TRrQbmBV4pAjN47j2XIH0/m1Q8P8dYvDIGnAAxnuTWy1hTgiagnBoDIUD5UaBsv+/8s4B6VX/rGYNpJx6U+jlTW7UH1qaSDRLheKuR5oI771fXiMdfSqoQ1JUPWpdEtJlg8QCM4qv5ZmB9Kc2zzqSqKLDEDe4bWQwMRED5zNW0Qxk0kufKpq45mixMH7ud+VE0Cp6hUHBgwTQSORTaaEEMzNEUd6Y6GZRzqCup2IPpU3tzvQxZUbVIyU0zRSAHU1FlFAEI70qXuxSoGcsFo1pKlbWKsJXoM5xs1IOedTC1MW6hlIirkU/9QQKl7uom1UNRZqm0RTiG600k70RLAGaIiUqXgLYAJG1HDVPRTe7NJ0GRAtUR6UYW6YWu8UtDsYRU0cnAE/KktsVYXQBsaltAmRAPQU/uieYptVFF6odlCt2I5zRfdiq7cQeVQa+xpU2SW47UihqhranN5upp4sC6U71FligI7nrU2LgVLGkAu8YFxVZ/EROE/OjNfkwRnuKktsdvpTtF0BW+7bEL2kk/lSZrg/GT/O9GZCNhUTbbtRYUgYvXD+IDvuaPaV+bsfU1Kzw/cVZW13pNvwDcQQc7b1JXmjaBTaQOlK2Q6ZCKiVqTXAKit0H/AGpqQsWQ0Uql7xe/0pU8kGMjDRKKi1F2VFLuQqqJLMYAHcmq/A+M8Nc16Lq+QEsTKgAZJlgBG9d0pJHNFF8LRlFERJAP0qQXtXPyclI6YQvYMCphBR7Dp+IZ/L8s0rmifL894rl9d+39mlq8aBBKkLdFWOlTEdK09X9mS0ACU4SjxUgKeZNFfTS932q2qCphBSfIKimE7U+irukUvdilmhFPQKcLVz3Y6U+gdKHJBZR0dqbR2q/oHSlp7Clkh5FA2qQsev0q+QaiQetGQZFZLJ70zcMTzqyUPWm0HrU2PJlX+j70v6TvVkoetNpNJthkyseHHU0hwo71YNMaMmGTILaA2pilTNNScgtkdPaom2OgqZqJpWUiOkdKRUUiaYmixjaRSpaqVFj2eN+Oe0b8SiIwChSCQvNgIDEz1JOmMYyeWSjQcyBiYwY7UFaltXS227ZwRkdX7L+KRxCvcuaEBdmknQAVjAJOSYHXnmcei8N4lZuAFHVpJGOxIyOQ8pid68RVq1OA8Ue38BjY/MGdudRKTXR3cMoy03R7GVqSrXn3D+07FkdicagVkwcY/QbfuN/x/jn/AKazcRyjXCGgGCV0FjA57r9RUK3ujZxVpX2Wb/tRbW5o0swBguIgZ3jmK33vIqF2YBANRacaYmZ6VxPAeEOzKSDLprXzDMFQdUxjPfrU/anh3izw4UCAzSGKqZYbKAZiG+vqaFKS7Q5wg2lBnWeG+JWeIE2nDRuMhhncq0EDvWgErzb2dc2uJARRk6DqB1EFxJAnEBeZ752r0lQaalfgw5IYvskFqQWoO+kFicAEn0GTT8NxCONSMGHUZH85/OnaMWmTininmn1VVfsTYxFNFSmlNGL9gyQ0U1SmmmjF+wZIjTFqkTUTUtfsNNDaqiz07HvQXajEq0B4q+w23qvb1ncx60dwetDeYirx1opSRJLgH4pqL8WNgaqupoLoKPST2Fos3uMKjlNVH8XfkBQ7omq7pvyq1xR9iskFPi7nE/arVrxPy+bftWO1mmW2elD4otdDTN5uOSJmqtzxZRtms/8Apid6A9ojlULhiVZp/wCpk/hpVme8alT9KPsPJHlYIqRHeoCpyKDykwiUSBQVeiLSNYyomX5VeHHNpGfhBUZMgREDOBkn5/Ks6amKKLXI0dj7Pe1fumL3tTDQqIFAwNQ1E8uWo9STQ+K9p/eXkvOgIVShAZl1KdU7YUkNyHLeuTD/AJURbkbE/wA2qtifJ7HpnhPhoK2uItu4X3jaVI2D3CF3xhWJkSM4Fb1jx+y/Etwyk6kUlm2QFfiWTzAz036GvMrHtC62UtKzLofUpk+UBHELEaZLtMg79qjwHGIXfWS5JkM+k6gFK6bjtnSwgGMkYnNFoM2+2eg+1HF6+HS7ZuAprgsrCGVlZSo31EnEQd55TWf7BXdTuE1lAgDa2WVIPlVVGfxOST1rLucXbTg0FpgTehWt63ARxDOxAMJpUpI6Htk3hnFjheFe/rRrlxB7uAnvFXWylmnzMp0rjqNtzScS4zpUz0S24YBlIIOxGxogrh/Yjx4e7f3z6VBVV1HAxGOnUn58q6lfGeHILC8hA3OoQJmJ6fC30pqLE2vBo6aeKpeG+KW76lrbEgEAyIyZj7VT4T2ht3LwtIQQVkMCNwzCPmFBEdaok2YqJqVNFFE5MiRUCKJFMRSoMmAaoGjMlQNuqpBkAZaEasslDK0UNSKr1XcVeZKE6CqRWTM50HeoG2KutaFCazTKUippA5U5WrHu4qLLRRSkAqLLR2Sh6aMSs2CpUTTSpYhmzxQTFOpI5UkMipkxsayOAYOKIGxNQxM1M5oHZMZg1JWBoaL0NMi7mgLDQOtNMVL3gpzp6UWFkgaZXNRcD+fzvUxG+9AWWuG4pkIKkhgcEEgjBDR0JkZHSh+8222jAA5yZIGTnn6bACoqAaiUjeqVDyNDg+K0BhOGA77bZ5HNFt+KEBlzDAA8wQDiR23rI1QYqSnnVKTWgyZ1VvxVgunUQvu2QAGBlTpbJOSzeaIkCjexHEra4g3LpIAQhYzlozjcBQ1cx7yVAM46cvWriXwijngY+Zmm6bKUn5PZfC/FrfEKCjANBJQkawA2mSBmNvqKv14tw3iD24uISrD88zBB3HY9K0PAfam6jPJZ2Z9clsTpIbVO5gKAMbelS470VcWesxUSa4rgfaZ3uoohEka1JUl9RgmTkcyPTngGxw/tQ4co9stLErEAqMEIRzIXnMyY9HiwaXg6ktUS1MDIB61BWByMg7EbU0iLEzUJmojVBqpRDIExobNRWNDaniGQJjUDRGoLkU8RqQxWokVFmoTuaeDKUkTcxQ5mhtQ2qsB5hop6q6+/3p6MGPNHjimI70nxvTNkfzerP9Bd/Faf/wDho+sVyIwUW+kAT+GnDEYqyfCr4/8ALf6f5qHEcM6RqQr6j9edFFOEktp/YGrxiih+dUwx5GjI2PT/ADRRBJLhnPLl60U3MiKCXAxRUcOI/wA0UBNsZ2prb4pK/IxSIgY2+1CY2ggMZpzcB8s5696Dqx/Pyqdi0SwmFmCCxgZ5g7f7U4pslhQYwem9O8/Wi3OAaCS6bjMsRv1CwD+9XLPhLsPIyE8stM9Phq8W3SRLkkrbM5SOc0+s/Sm4u09sw6MpG8iMzyO1CRyw2+f6Ummuyk76DrxB+E5Bo/DNDCqVsDfNWkYTkkegBP5kfemlvQ7LFu42uQTH6RgCtFeN1MNZMk5aNRjRpEAkbfLeso21OVeI5Muf/TM1BiVAYMjDbDDnHI55dK02uwUjd8W9pL2nSHOnyqqiVGlCCDgzPlG5nJzVjw/j3Rv+Gfdhrls6ATsNTYnZeo7jvXJcZdBIjpT8JxZQ/tv2z9am9js9ete0luSrhlKHSzafJgSW3lRjY523rQ4Pj7d5S1tw4BgkTgxMQc7GvJbHiOpDb5FtXKZMCZjIxtWhwXGpaZGRjqDq5kYwcLjOxYE9DtVJD0eoNQmrh09qHW+zay9lnmCB5QQBiBIAAHrkxJNbPB+0yPrXTDKW0gHDKBIP0qkKjaYUFloVjxFXbRB1gAsOQPQHmane4gL8RC+pA+/yqkBFhQmqbvQSa0SAgzUBzRmoLiqUQsDppU9KqoVnG8DxXDIRpW0vfWJ+bMAat3fGLZPxpP8Af9oBrlriocSFJBAkEcusVZteGAqHEbQCWAWQCpiSJ2+9cFS6R6Efx0oqlFF274invA/vhEQEAZlIPouTMZ7VH/WUVy4dnBXSV0HSAJPMjO/1qP8ApCqqG4UAgBSTGeWx60z+HWwVVmguPKFByGxO0D5xSwl5Jf4ub6S7sjx3EWGDMbBWDBZYQyRI2JBPqDWMWGdMgSIkyfqAK6jibKOzWWI1KC58ukYUkamBknEfOuYuWH0ltIUEiF1AkQJ2JmIO+1Di0c3LNyduvsABk0eypO1QtJzbacR1qykLlf3qU1ezIKnCzP8AxFBHIg/lFDRhMTj8vWKIliVLahEfT86qpakxP7dqubj+lUFNdluwUD/CGGRDTBJBidJneDg1rW/DEc6bbhnj4CdBJIOEafPB5QNqyOGt6XDTgSR8sz/PSorfhidp55wB8xOKj1Mev9BYbjrbq5XKqDpOQY35jedLZHStTwjh2IBDak0iQNYPmdU3HYk9axVbW0sxgscnJPyJ+p9K6/2fDJcRmLrZRmRxJ0FyjgSoidhyPLblMJfmsKT7Rm+LJcW3Olh8BaDdwCgLBtZ07sNqxEcDG2P4a6nxLh5U2/fM73LmtWGsLoYEaNbchBJA2jI6VOG9mXKO5V2ZCIARvMGOkFRpJfqY2Brd3J92FRXSoxBLCRG+flUtUbgkx8oNXfEPDhaZUdwhZFcKwcEAkiGGmQ3l27ignhkjNxZ9RjtB571H0saTfRSViCDkyRjnJ5V0TBECI4tOZYMhLeUifiKkEHOM8q5ziVCsFmeZo/CcVpJzIYgtIBkieZBjds96qLV7C6OlSxbcweHs4BJy4gYgyBmPnXPeKIqXWVAIB3EgZAJAByAJitB7zMha2XiJfAI0QZIaJIxEY9Ky2dmVmLSR1EbmN5/Q7VU0rpML10H4dp33p2vDb8/WqVotGN+Xp/IqTFsYj9KhTfQi6r0RbxkEMQV2M7c8VSW9GOhqb3h0NUpILNHhOOKMrSTpYNkncRG3oM71Dj/EXunU7FzsCY2mYgQInt+lUxmoutWOzqk9sQBDWs9mgRjqN960b/tLwyrq1lpnAUzgxMGIHrXAMtDINUptCPVVcESDIqDGuB8K8cewSI1KxBYEme5U8iZrYs+1aMwDIUEmTIIA5EdeUj71rGaa2I6GlVbhOPS4gcEwZjEbEj9KetAPPLnEBykacEnpv61ou1t7So7qpDavK67TIxBxvtWTw1lAsepE7kkY+XerF22AQyjzaNIG4gT65z+Yrhc2lspGpxPG8MyIjO7GQww0eUkKARykH6U3E+KWQyMbZJRBp/tmBucSfvWHaYaxrWCoIBjYZPWDvWtZ8PNwEFYEKssVVjBwBGoRgUlyOW0VHfQfxHj4efdoMQ34pz5QdoOB8qzx4m6lVCJpjcohPT4oycDNA4y2xcnLHWwmRBKyIBmZAHbarlt2QeYwmgCAFVpaJkgAxjb9zXN6jUm7K+ReL6bizoCFDGpVJD7iXzgGBkDc96w7aMf1roLpZrc6dRURAGo6TAE7k+p61m3L/lBJgiAARECIE/SrzUtmcuwCLC5bmRpBzvIMdIjrU0deY267nrmmuXtYPUkGfQRSt2pyO+DjbO/1rTTEHRGiAAVBO+JzM9+nyqvxI3AH20j+CKtWL0eUcwIxPKhXLMhpnB+pPMyP2rGSEVrVwAjOR+Wc1rv4xeeFZjAERtsRA8sTEkiaxFdhIHL8+VTWQY0nIM4I23IPb9KlNrSG0aNy64YOG22gkNsJiBOMYrRPEXHQkOWPctJHTYAHt1rmrnEtGnYbY57b/T860+AAfSpYjIzuJHbc9Y2q4TlB2mJx9y54nwrott7hYK+QpVgJCoxOTkeaJjlUf+GdUuZL6iNLYaGBXvz+laniXg/u7Pv3L7III8oYiCASRzB2Fc/xLgzp1by3Tnt9a6JScnbKX5R+Kty5IkiSciDJM4EmBT8KNDAkYJzI5TBiOdCF3A/k9q3/AApEdHD7ESsQSpzOodD+h5ms02mC2UU4phqUToKkMN5UkQc7ZgY60HiTEBTjEggKfSOdF4d3RzocjOIJj0I2I2rteG40yZa2UFq0dXlINxp1g8g0FMYya1ishnn5uNsQNO3wqT8if0NV7lz5fz7V6T45ZcMjKivaaZGm2ZeGhQCpI+EHHWKo+MeziP8AA1tIZ8IoIZPLonTAVvixtttScBx45S+lNnEb8x/PtQQ5Jjl9q7zwjwG2tm6t1ULan0MYB0aFgiTIEzjrNcn7QeH+4uBMg6FbJGZJH4cRj71nVDnwygrf2KCXiPlt+f7UcXpGRHWrPBeEXLqB1C7kCWgkQBI5RMjMbVXv8BdSZQ455I+u0VSyXRGEkraC+/QIcaiRnYFTMyN56csGhugPwycTVEAgzBiiWrrLPrTUn5JDPHT55o1jhkKFmJDEgJzEmcnnyiqrPjFRRpFUpJugLf8AV3LfkS75RtpLRnJiV6k01VIpqu2AcuiKF3afiiMD1onGg6FdH1LOYUSO7RuJ69utUONuEOBORuScZ/SrS2w4ZFUIyk41KzMwJkaYDR03INeZvTs6G4yTVbrX8E+G4rMPDeWNh0iQfUc9627nHOYdExC9OQ7bDG/5Vx6PpxmPr6x9a6Hh7pVIbVnGn/8AUx5oMY3yZ5118LW03Rz210PxvEs4mRvsV2mYlu+T3FVuBvshZdEknyxB5cu3berBAPwoAXEHTIUqIYZODJUGftQgSzMiGDOpnZhK6SQWmDGe0kkelcfJJSk72dcYcnFU+jX4R2UP5lGsLOmRIAx5uWeh5npWla4vTbCqpBZmLPMyRIiI2Ep3wax+GsuILvOseUKDjSdvMTuSTkVpJZUFXdPKd0Usu/PT5dJ3yPKc788+PlcZ6f8AR6Unx8sFcfdv3MXx3gmN1nABQKm2PhtLrMRHxaifWsj3ZgHl07Z3+h+lei8W6W7VwlkGtUASBrAEC4cbknPYCuT451IBOkgwZETI8pJzOqFGTuAK7Z8kU9/4PLfA2nKPS9yhaAJnCgbmehxA+XSq/EGTIO+QOYxAGOsCrtq0pzq5ZkdOnpWSw0tmZxzkRtyjvUOSfRzB7VkKZODq5CcZmO9arXdSzoWW0r8MfDnaMjOdvpWQjwImMmDtsZ65o97iCLcgqTzjbsIO/r0ilYFe5ZGpi2mDidvp9R8sVb4BWBBVcZORpER36iBnpWa/EscA856Z9P5tRrOtzOokx88cv51pjdnXXrrXbPuiZ8ylUmAsaphSAuSSZEnHLniyFlCDPwkdYO3Xr3o3DXSUBc5DD8RlvMcbcsjl12qncGu4waBE9Fkj8I5DY5MbZq4yYeC5/p1uVAOWbBMjSIzqGTG2Z2z6aZ4U27bFBpSdTEsmxICkhssJ/wCUbzWcFOpATtrUlRKzBMjTgmMmMYOd6Bx7w0wQxMzy6FZG5BBBnO00RlbGnQfjbtwqARBXmAuAf7dhQk4s6V1McTEY36H+b1C0+RKzgjSZ5jHpQRYuNgS2fXJ7H5flV9CdnScD4kyWGuMzwrqgChGnVJmXBnbqK1F8USLQLszXYgKEBSVUj3nmMfENq5a9fdLJT4QSSyhVOpgAJn1EzPpWSvFEZByNj06H1pZN9G8PxM4Kkz1e3bsFns6bms7lleIgA6HZdPMYU9a5bxfxH3V7TKX0I1I3MLrZdOqSGI0ETitb2S9oHvjQ8alZQCJBM5yNuVZPtRZ4c3lCvoX3a6dCB7Zl3JIKuOc7A02zp4eWTd3377LVjxO0dJdF86hlDKBjJlWTA5zPStWxwSOJQ3E2/EGXqI1z9hWK/Coy2FS+oItaRKOJUzJB5c62+A4u3bRAbrPrYqraGGVItkdYBxJpWaPn00lXwZHiFpA5R1S9DaSNGlw2lXA1Hynysp5fXFcp4jwi6mKOVGToZT5QIkBgTqiRXc+OpaR0ZleblwmUaJZbYEtqnGkKIHSuc8VFgW7ipbuKxT42eVPmtkkiIJ88f9Jocn0c3I4yTtKzmktyQF3J26n9aK3DMu6mqy2SILHB27/zFaHA32QlrYBkDESOx9cyDRGVPZxlKDSra/1biDkrP/Sn/wBaVb5x/wCQUcwWgEiCwb4skADOJxk9vvRhwkgOzHzE6sTueo2nvUy4XyQIx5eXr6zBqHDO2ooCBOY5bd/9685ttaKsfiOF0EMGlDt6xt06fXtR+HuAyXbSAMczvgBdo/aiXbWDqjI35A8iZ2qmnCSRE5gz9ZjqZ6UReUdsIupXRspe1upJYhQGU43nMgdvt3oKurXsAfFBEYaGwYO0wp+VU7YOssCJEwpBOQJ2HoaNwvEk3GdoBjbboJzkmB96ycav4Orl/EOcMX3dl3jGdX+HSAZUsAYg8zPScVocLx6uSCoaBoBOYEyCOexNQ4YFw2oKRp1KMmcbduXzntQOHuLbLwieUoNsgBYGJ679TWLqSryic2kmmaXisogUMpS4fi6HHxLziJ+XKKzONdTpUzggZEKQQBKdPzHSn8U4ksikBVRQ3lYneMMvoc+un0puMvFEtyNbGWQ/EAfLlScjl/ir471ZpLmvjcfgD4pxCJKrExB5xGAf7sZPYnNZVq2wAcqwQmNRGDI9NjkVK8+tdWkROTPMjEk9+3Kr/hV9wpuai5Vgi2ypOYxpXby4x2NdDuKObihGTakUeIsukMyEK3wyNyc/L70B9QXeNc/kc+ldJ4sWayS6iQwmDqEkxDA/C2f85rmeJU+Wdsx84P7UccnJWXz8UeOSUXapPZFLM8sfbrn61esIEYCJYkAKJlvNkT+HYfyarcExRpxgiQTiDz3yK2k4VXhyTMgb4BAzq3hSIB6ietWzGwvEHWwIAYBpaAo+GZgEbHy8o9JIqPDcOdRggSDyMmNzpaNWRG/OicOiFyo1scE6WWcYnrIkwMSAIGJrTe/Awcd9U9yQcxnGOnSpc8VSFQNQg/BMAgHT5gAsGBPlEsdsZ7YDx6WU0s41GdiIbnAaBnbI6n1qo99UcMQpyJGRECOWQN4A2xO1UfEgzKp/DucEnVn4m22JMYNRG7ux2bXAe7cqSujOATPOf95g9BVr2m8R1OChCwAsGAYG7emT3E43rn/CrTs4Ys5BGpY1Z0yTJ2AwRvJqx41bJuIoyDvqGMAkrqLZ2236TWrn+kVMPwfA4aGSDJgnymdxkQ3PacEdcnb2auqdbWUbVEBWIAnsR3B7VRtcUSrEr5gVDCQI3JMqdlIMSB65xf4DjLjEyxVMgE6gDgHUCNzOenOq45Jdj6JeDW/6a5Lz8QJVSGKx1g9/Wq3iDs/EOZcoxnU6yyqSYnzZgd6XE2ymUMyZ+ZPSZnM59KyL/FPEEEHG4MVt+V7Q8/Y6BAW0BXA0JoBZbmDJLZVSI8x71o/1nu0UFPfe7Yvq0tbVJKsYiNXmUsSw51zPhvHkLGoj0oviPFtoJDxOIGx6g5/ejRfq62D8T8ce7ca5OnJKruq4jnjbnFFtcUrcMzaPPAViGJnzhgSkbwoBM1h8NdAOROCM5H8zVq5xggqq6ViIHLMk7fyakhSasuCCgnc7jTtI2lh9qibXQECP2qpb41lO5iI229Onyp1uvG5YT9j/AL0rJyL1rxDQAvu9Uc53nPTvSrJuXMnBpUeowtkH5+v6U1rDiMbUqVc3hiL3GfCv9w+xqlxWAIx5RSpUcf0gWfB/xnnpbPPcc6PZ/wDyH9T/AN1KlWfJ5+DXwvkuv/4jf3H7U3h+bjTnEZzjGKVKsV1/ALsp+JsQ+DGG2x/zVPifgs+p+4pUq2XgH0avs1bBS6SASLhgkSRuMHljFZVzy37enHpj7UqVJfU/g0h4AeJudV/JyFnv5udV1+E/MfKNqalW3H19jLl+or8J+L+39q1/D+fcMD3EjFPSq2R5LlpRr22GO3kG3Spfgvdojtg7dNh9KVKsmBkcT8B+f/uqdr/wh/cv/tpUqaEX/AVHunMZ689xzredBrGB8Cf/ACf4H0pUqzf1svwYSfF6LA7DQ2Kv38DGI0gdhpGB0FKlV+RMqsfK3/V9monBeYIGyNIwc/elSrq4emSjIUeY/wBzfeg8TSpVTGwfBc/X9aL4kMj1NKlUsQdR5fn/ANtJPh/nalSqGOPZOlSpVJZ//9k="
                    width={200}
                    height={200}
                    alt="Destination 3"
                    className="w-full text-white h-32 object-cover rounded-md"
                    style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
                  />
                  <h4 className="mt-4 text-lg font-semibold text-white">
                    Mukteshwar
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sukoon in hills💌
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
