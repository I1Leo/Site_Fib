import styles from './navigate.module.scss'

export default function Navigate() {
   return (
      <div className={styles.container}>
         <button type="button" id='prev-btn'>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect rx="15.5" width="31" height="31" fill="#F7D22D" fillOpacity="0.9" />
               <path d="M10.9961 14.5312L16.6797 8.81836C16.9727 8.55469 17.4121 8.55469 17.6758 8.81836L18.3496 9.49219C18.6133 9.75586 18.6133 10.1953 18.3496 10.4883L13.8379 15L18.3496 19.541C18.6133 19.834 18.6133 20.2734 18.3496 20.5371L17.6758 21.2109C17.4121 21.4746 16.9727 21.4746 16.6797 21.2109L10.9961 15.498C10.7324 15.2344 10.7324 14.7949 10.9961 14.5312Z" fill="#231F20" fillOpacity="0.8" fillRule="evenodd" />
            </svg>
         </button>
         <button type="button" id="next-btn">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
               <rect x="31" y="31" rx="15.5" width="31" height="31" transform="rotate(-180 31 31)" fill="#F7D22D" fillOpacity="0.9" />
               <path d="M20.0039 16.4688L14.3203 22.1816C14.0273 22.4453 13.5879 22.4453 13.3242 22.1816L12.6504 21.5078C12.3867 21.2441 12.3867 20.8047 12.6504 20.5117L17.1621 16L12.6504 11.459C12.3867 11.166 12.3867 10.7266 12.6504 10.4629L13.3242 9.78906C13.5879 9.52539 14.0273 9.52539 14.3203 9.78906L20.0039 15.502C20.2676 15.7656 20.2676 16.2051 20.0039 16.4688Z" fill="#231F20" fillOpacity="1" fillRule="evenodd" />
            </svg>
         </button>
      </div>
   )
}
